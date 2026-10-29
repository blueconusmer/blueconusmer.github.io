(()=>{
 const button=document.querySelector('#theme');
 let theme;try{theme=localStorage.getItem('kobe-theme');}catch{}
 if(theme)document.documentElement.dataset.theme=theme;
 button?.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme?document.documentElement.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;theme=dark?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('kobe-theme',theme);}catch{}});
 let category='전체';const search=document.querySelector('#search');const select=document.querySelector('#tag-filter');const rows=[...document.querySelectorAll('.post-row')];
 function filter(){let count=0;const q=(search?.value||'').toLowerCase().trim();for(const row of rows){const show=(category==='전체'||row.dataset.category===category)&&(!select.value||row.dataset.tags.split(',').includes(select.value))&&q.split(/\s+/).every(word=>row.dataset.search.includes(word));row.hidden=!show;if(show)count++;}document.querySelector('#empty').hidden=count>0;document.querySelector('#result-count').textContent=`${count}개의 기록`;}
 document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;document.querySelectorAll('.filter').forEach(f=>{f.classList.toggle('active',f===b);f.setAttribute('aria-pressed',String(f===b));});filter();}));
 search?.addEventListener('input',filter);select?.addEventListener('change',filter);
 if(search){const requested=new URLSearchParams(location.search).get('category');const button=[...document.querySelectorAll('.filter')].find(b=>b.dataset.filter===requested);button?.click();}
 document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',async()=>{const code=b.closest('.code-block').querySelector('code');try{await navigator.clipboard.writeText(code.textContent);b.textContent='복사 완료';setTimeout(()=>b.textContent='복사',1800);}catch{const range=document.createRange();range.selectNodeContents(code);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);b.textContent='선택됨 · 직접 복사';}}));
})();
