function sho(){
    const myd=document.getElementById("null");
    myd.innerHTML='';
    let section=document.createElement("h2");
    section.textContent=document.getElementById("sec").value;
    document.getElementById("null").appendChild(section);
    section.className+="text-center cs";
    
    let presenties=0;

    let regular=document.createElement("h2");
    regular.textContent="REGULARS-PRESENTIES";
    document.getElementById("null").appendChild(regular);
    var x=document.getElementById("students").value;
    for(let i=1;i<=x;i++){
        let gfh=document.createElement("button");
        gfh.textContent=i;
        document.getElementById("null").appendChild(gfh);
        gfh.className+="btn";
        let jk="name"+i;
        gfh.addEventListener('click',function(){
            gfh.style.backgroundColor="#90EE90";
            presenties+=1;
            pre.textContent=presenties;
        })
    }
    let le=document.createElement("h2");
    le.textContent="LATERAL ENTRIES-PRESENTIES";
    document.getElementById("null").appendChild(le);
    var y=document.getElementById("le's").value;
    for(let i=1;i<=y;i++){
        let gfh=document.createElement("button");
        gfh.textContent='LE-'+i;
        document.getElementById("null").appendChild(gfh);
        gfh.className+="btn";
        let jk="name"+i;
        gfh.addEventListener('click',function(){
            gfh.style.backgroundColor="#90EE90";
            presenties+=1;
            pre.textContent=presenties;
        })
    }

    let pres=document.createElement("h3");
    pres.textContent="Total Presenties";
    document.getElementById("null").appendChild(pres);


    let pre=document.createElement("h3");
    pre.textContent=presenties;
    document.getElementById("null").appendChild(pre);
}

