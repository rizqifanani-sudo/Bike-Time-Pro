let timerInterval = null;
let timeLeft = 0;
function formatTime(s){ const m = Math.floor(s/60).toString().padStart(2,'0'); const ss = (s%60).toString().padStart(2,'0'); return `${m}:${ss}`; }
function startTimer(minutes){ stopTimer(); timeLeft = minutes*60; document.getElementById('timer').innerText = formatTime(timeLeft); timerInterval = setInterval(()=>{ if(timeLeft<=1){ stopTimer(); alert('Sesi selesai!'); return;} timeLeft--; document.getElementById('timer').innerText = formatTime(timeLeft); },1000); }
function stopTimer(){ if(timerInterval) clearInterval(timerInterval); timerInterval=null; timeLeft=0; document.getElementById('timer').innerText = '00:00'; }