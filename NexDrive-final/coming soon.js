ng soon · JS
Copier

(function() {
    // Injecter les fonts si pas déjà présentes
    if (!document.querySelector('link[href*="Playfair"]')) {
        var font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap';
        document.head.appendChild(font);
    }
 
    // Styles
    var style = document.createElement('style');
    style.textContent = `
        #cs-overlay {
            position: fixed; inset: 0; z-index: 99999;
            background: #0a1628;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            text-align: center; padding: 40px 24px;
            font-family: 'DM Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            overflow: hidden;
        }
        #cs-canvas {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            pointer-events: none; z-index: 0;
        }
        #cs-orb {
            position: absolute; top: 50%; left: 50%;
            transform: translate(-50%,-50%);
            width: 600px; height: 600px; border-radius: 50%;
            background: radial-gradient(ellipse, rgba(41,121,255,0.12) 0%, transparent 70%);
            pointer-events: none; z-index: 0;
            animation: cs-pulse 4s ease-in-out infinite;
        }
        #cs-content { position: relative; z-index: 1; }
        .cs-corner {
            position: absolute; width: 36px; height: 36px; opacity: 0.18;
        }
        .cs-corner.tl { top: 24px; left: 24px; border-top: 1px solid #2979ff; border-left: 1px solid #2979ff; }
        .cs-corner.tr { top: 24px; right: 24px; border-top: 1px solid #2979ff; border-right: 1px solid #2979ff; }
        .cs-corner.bl { bottom: 24px; left: 24px; border-bottom: 1px solid #2979ff; border-left: 1px solid #2979ff; }
        .cs-corner.br { bottom: 24px; right: 24px; border-bottom: 1px solid #2979ff; border-right: 1px solid #2979ff; }
        .cs-logo { margin-bottom: 52px; animation: cs-fu 1s cubic-bezier(.16,1,.3,1) .1s both; }
        .cs-logo img { height: 72px; width: auto; filter: drop-shadow(0 0 12px rgba(41,121,255,0.5)); }
        .cs-label {
            display: inline-flex; align-items: center; gap: 10px;
            font-size: .6rem; font-weight: 500; letter-spacing: 3.5px;
            text-transform: uppercase; color: #2979ff; margin-bottom: 22px;
            animation: cs-fu .8s ease .3s both;
        }
        .cs-label::before, .cs-label::after { content: ''; width: 24px; height: 1px; background: #2979ff; opacity: .6; }
        .cs-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(2.6rem, 6vw, 5rem);
            font-weight: 300; line-height: 1.08;
            letter-spacing: -.5px; color: #fff;
            margin-bottom: 10px;
            animation: cs-fu 1s cubic-bezier(.16,1,.3,1) .4s both;
        }
        .cs-title em { font-style: italic; color: #5b9fff; }
        .cs-pagename {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(1rem, 2vw, 1.3rem);
            font-weight: 300; font-style: italic;
            color: rgba(255,255,255,.3); margin-bottom: 32px;
            animation: cs-fu .8s ease .5s both;
        }
        .cs-sep {
            width: 1px; height: 44px;
            background: linear-gradient(180deg, transparent, rgba(41,121,255,.5), transparent);
            margin: 0 auto 32px;
            animation: cs-fu .8s ease .55s both;
        }
        .cs-desc {
            font-size: .92rem; font-weight: 300;
            color: rgba(255,255,255,.38); line-height: 1.85;
            max-width: 400px; margin: 0 auto 44px;
            animation: cs-fu .8s ease .6s both;
        }
        .cs-btn {
            display: inline-flex; align-items: center; gap: 9px;
            background: rgba(255,255,255,0.05); color: rgba(255,255,255,.7);
            border: 1px solid rgba(255,255,255,.12);
            padding: 12px 26px; border-radius: 10px;
            font-family: 'DM Sans', sans-serif; font-size: .86rem;
            text-decoration: none; transition: all .3s;
            backdrop-filter: blur(8px);
            animation: cs-fu .8s ease .75s both;
        }
        .cs-btn:hover {
            background: rgba(41,121,255,.15); border-color: rgba(41,121,255,.4);
            color: #fff; transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(41,121,255,.15);
        }
        .cs-progress-wrap { margin-top: 56px; animation: cs-fu .8s ease .85s both; }
        .cs-progress-label { font-size: .62rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.18); margin-bottom: 10px; }
        .cs-bar { width: 180px; height: 2px; background: rgba(255,255,255,.07); border-radius: 2px; margin: 0 auto; overflow: hidden; }
        .cs-fill { height: 100%; width: 0; background: linear-gradient(90deg, #1454d4, #5b9fff); border-radius: 2px; transition: width 2.5s cubic-bezier(.16,1,.3,1); }
        @keyframes cs-pulse { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:1} 50%{transform:translate(-50%,-50%) scale(1.15);opacity:.7} }
        @keyframes cs-fu { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
    `;
    document.head.appendChild(style);
 
    // HTML overlay
    var overlay = document.createElement('div');
    overlay.id = 'cs-overlay';
 
    // Détecter le nom de la page depuis le <title>
    var pageTitle = document.title || 'Cette page';
 
    overlay.innerHTML = `
        <canvas id="cs-canvas"></canvas>
        <div id="cs-orb"></div>
        <div class="cs-corner tl"></div>
        <div class="cs-corner tr"></div>
        <div class="cs-corner bl"></div>
        <div class="cs-corner br"></div>
        <div id="cs-content">
            <div class="cs-logo">
                <img src="logo/image-removebg-preview.png" alt="NexDrive"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
                <span style="display:none;font-family:'Playfair Display',serif;font-size:1.8rem;color:#fff;font-weight:700">Nex<em style="color:#5b9fff">Drive</em></span>
            </div>
            <div class="cs-label">Bientôt disponible</div>
            <h1 class="cs-title">En cours de<br><em>construction</em></h1>
            <div class="cs-pagename" id="cs-pagename">Cette page arrive bientôt…</div>
            <div class="cs-sep"></div>
            <p class="cs-desc">Nous travaillons pour vous offrir une expérience exceptionnelle.<br>Revenez nous voir très prochainement.</p>
            <a href="index.html" class="cs-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Retour à l'accueil
            </a>
            <div class="cs-progress-wrap">
                <div class="cs-progress-label">Progression</div>
                <div class="cs-bar"><div class="cs-fill" id="cs-fill"></div></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
 
    // Animer la barre
    setTimeout(function() {
        document.getElementById('cs-fill').style.width = '35%';
    }, 1000);
 
    // Starfield
    var c = document.getElementById('cs-canvas');
    var x = c.getContext('2d');
    var W, H, stars = [], raf, last = 0;
    function rnd(a,b){return a+Math.random()*(b-a)}
    function resize(){
        W=c.width=window.innerWidth;H=c.height=window.innerHeight;stars=[];
        var n=Math.min(Math.max(Math.floor(W*H/2200),140),380);
        for(var i=0;i<n;i++)stars.push(mk());
    }
    function mk(){
        var t=Math.random(),r,col,bA,spike;
        if(t<.5){r=rnd(.2,.5);col='10,20,40';bA=rnd(.06,.16);spike=false;}
        else if(t<.78){r=rnd(.4,.8);col='8,18,36';bA=rnd(.10,.22);spike=false;}
        else if(t<.92){r=rnd(.7,1.2);col='5,15,30';bA=rnd(.16,.30);spike=false;}
        else{r=rnd(1.1,1.8);col='2,10,25';bA=rnd(.25,.42);spike=true;}
        return{x:Math.random()*W,y:Math.random()*H,r:r,bA:bA,al:bA,col:col,vx:(Math.random()-.5)*rnd(.12,.38),vy:(Math.random()-.5)*rnd(.12,.38),ph:Math.random()*Math.PI*2,spd:rnd(.5,1.4),spike:spike,twinkleAmt:rnd(.25,.6)};
    }
    function drawStar(s){
        var a=s.al;x.save();
        if(s.r>1.5){var g=x.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*5);g.addColorStop(0,'rgba('+s.col+','+(a*.6)+')');g.addColorStop(0.35,'rgba('+s.col+','+(a*.18)+')');g.addColorStop(1,'rgba('+s.col+',0)');x.globalAlpha=1;x.fillStyle=g;x.beginPath();x.arc(s.x,s.y,s.r*5,0,Math.PI*2);x.fill();}
        x.shadowBlur=s.r*7;x.shadowColor='rgba('+s.col+','+a+')';x.globalAlpha=a;x.fillStyle='rgba('+s.col+',1)';x.beginPath();x.arc(s.x,s.y,s.r*.8,0,Math.PI*2);x.fill();
        if(s.spike){var angles=[0,Math.PI/2,Math.PI/4,Math.PI*3/4],lens=[s.r*8,s.r*6,s.r*4.5,s.r*4.5];for(var i=0;i<4;i++){var lg=x.createLinearGradient(s.x+Math.cos(angles[i])*lens[i],s.y+Math.sin(angles[i])*lens[i],s.x-Math.cos(angles[i])*lens[i],s.y-Math.sin(angles[i])*lens[i]);lg.addColorStop(0,'rgba('+s.col+',0)');lg.addColorStop(0.5,'rgba('+s.col+','+(a*.85)+')');lg.addColorStop(1,'rgba('+s.col+',0)');x.strokeStyle=lg;x.lineWidth=s.r*.35;x.beginPath();x.moveTo(s.x+Math.cos(angles[i])*lens[i],s.y+Math.sin(angles[i])*lens[i]);x.lineTo(s.x-Math.cos(angles[i])*lens[i],s.y-Math.sin(angles[i])*lens[i]);x.stroke();}}
        x.restore();
    }
    function loop(ts){
        var dt=Math.min((ts-last)/16,2);last=ts;x.clearRect(0,0,W,H);
        for(var s of stars){s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.x<-10)s.x=W+10;if(s.x>W+10)s.x=-10;if(s.y<-10)s.y=H+10;if(s.y>H+10)s.y=-10;s.ph+=s.spd*.013*dt;var tw=s.bA*(1-s.twinkleAmt)+s.bA*s.twinkleAmt*Math.max(0,Math.sin(s.ph)*Math.sin(s.ph*2.1+0.9));s.al=Math.max(0.06,tw);drawStar(s);}
        x.globalAlpha=1;raf=requestAnimationFrame(loop);
    }
    window.addEventListener('resize',function(){cancelAnimationFrame(raf);resize();raf=requestAnimationFrame(loop);});
    resize();raf=requestAnimationFrame(loop);
})();
