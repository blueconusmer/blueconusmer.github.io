# Kobe’s Dev Notes

Kobe의 개발 학습, 업무 회고, 커리어·인사이트를 기록하는 GitHub Pages 블로그입니다.
Node.js 22 이상만 필요하며 npm 패키지 설치가 필요 없습니다. Markdown 파서는 Marked를 포함했고 라이선스는 `vendor/marked-LICENSE.md`에 있습니다.

## 먼저 화면 보기

`preview.html`을 브라우저로 열면 홈 화면을 볼 수 있습니다. 글 이동까지 확인하려면 다음 명령을 사용하세요.

```bash
npm run build
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 종료는 Ctrl+C입니다.

## GitHub Pages로 처음 배포하기

1. GitHub에서 **Public** 저장소 `blueconusmer.github.io`를 만듭니다.
2. 이 폴더를 VS Code로 엽니다. 터미널에서 다음 명령을 순서대로 실행합니다.

```bash
git init -b main
git add .
git commit -m "Create Kobe Dev Notes blog"
git remote add origin https://github.com/blueconusmer/blueconusmer.github.io.git
git push -u origin main
```

3. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정합니다.
4. **Actions → Build and deploy blog → Run workflow**를 실행합니다. 처음 push가 설정 전이라 실패했어도 이 단계로 다시 실행할 수 있습니다.
5. 성공하면 `https://blueconusmer.github.io`에서 확인합니다.

이 주소는 배포 목표 주소이며, 파일을 다운로드하는 것만으로 공개되지는 않습니다.

## 글 하나 추가하기

1. `templates/post.md`를 복사해 `content/2026-10-30-my-first-post.md`로 저장합니다.
2. 위쪽 메타데이터의 제목, 날짜, 카테고리, 태그, 설명을 수정합니다.
3. 본문을 작성하고 `draft: false`로 변경합니다.
4. `npm run build`로 확인한 뒤 GitHub에 commit/push합니다. 자동 배포됩니다.

```bash
git add .
git commit -m "Write my first post"
git push
```

카테고리는 `개발 학습`, `업무 회고`, `커리어·인사이트` 중 하나를 사용합니다. 태그는 쉼표로 구분합니다. 메타데이터 값은 따옴표 없이 한 줄로 작성하세요. 파일 이름은 영문 소문자·숫자·하이픈을 추천합니다. 본문은 제목, 목록, 표, 코드 블록, 링크, 이미지 등 일반적인 Markdown을 지원하며 HTML은 텍스트로 표시합니다.

`draft: true`인 파일은 빌드에서 제외됩니다. **Public 저장소에는 초안 원문도 공개**되므로 비공개 자료를 초안 파일에 넣지 마세요. 초안을 공개 글로 바꾸면 검색·필터·목차가 자동 갱신됩니다. 배포 전 `dist/`를 새로 빌드해야 변경이 반영됩니다.

## 소개와 프로젝트 수정

`site.json`의 `intro`는 소개문, `projects`는 홈 프로젝트 목록입니다.

```json
{
  "title": "프로젝트 이름",
  "description": "해결한 문제와 직접 맡은 역할",
  "tags": ["Python", "FastAPI"],
  "url": "https://github.com/blueconusmer/저장소명"
}
```

실제 프로젝트 설명은 준비 영역으로 남겨 두었습니다. 예시 글 3편에는 `example: true`가 설정되어 화면에 예시 표시가 나옵니다. 직접 작성한 글을 추가한 후 예시 파일을 삭제하세요. 예시 파일이 모두 없어지면 홈의 예시 안내문도 자동으로 사라집니다.

업무 글은 현상 → 가설 → 확인 → 해결 → 검증 → 배운 점 순서로 쓰면 좋습니다. 공개 가능한 코드와 재현 예제, 출처가 확인된 자료를 사용하세요.

## 구조

| 파일 | 역할 |
| --- | --- |
| content/*.md | 글 원문 |
| templates/post.md | 새 글 템플릿 |
| site.json | 이름·소개·프로젝트·배포 주소 |
| style.css | 반응형 디자인·다크 모드 |
| client.js | 검색·필터·테마·코드 복사 |
| build.mjs | 정적 HTML·사이트맵 생성 |
| .github/workflows/pages.yml | GitHub Pages 자동 배포 |

`dist/`는 생성 결과입니다. 글을 삭제하거나 초안으로 바꾸는 경우 이전 파일이 남지 않도록 새 빌드를 사용합니다.

외부 폰트를 불러오지 못하면 시스템 폰트로 표시됩니다. 검색은 브라우저 안에서 동작하며 별도 서버·DB·로그인이 없습니다.
