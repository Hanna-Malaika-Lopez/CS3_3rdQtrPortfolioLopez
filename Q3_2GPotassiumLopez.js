    var data= JSON.parse(localStorage.getItem("data")) || [];

    function submitted(event){

    event.preventDefault();

    let confirmed = confirm("are you sure you want to confirm?");
    if(!confirmed){return}
    if(confirmed){
    let studID=document.getElementById("studentID").value.trim();
    let fName=document.getElementById("fName").value.trim();
    let bDay=document.getElementById("bDay").value;
    let email=document.getElementById("email").value.trim();
    let cPNum=document.getElementById("cPNum").value.trim();
    let gLvl=document.getElementById("gradeLvl").value;
    let status=document.querySelector("input[name='status']:checked").value;
    let clubOp=document.getElementById("clubOp").value;
    let reason=document.getElementById("reason").value.trim();

    data.push({
        ID: studID,
        fName: fName,
        bDay: bDay,
        email: email,
        cPNum: cPNum,
        gLvl: gLvl,
        status: status,
        clubOp: clubOp,
        reason: reason
    })

    saveData();
    document.getElementById('mainForm').reset();

}}

function saveData(){
    localStorage.setItem("data", JSON.stringify(data));
    console.log(localStorage);
}

//onblur
    function newfxA(){
    let a = document.getElementById("studentID");
    a.style.color="#CB7A5C";
    a.style.textShadow="2px 2px #f8d3c5";
    }
    function newfxB(){
    let b = document.getElementById("fName");
    b.style.color="#CB7A5C";
    b.style.textShadow="2px 2px #f8d3c5";
    }
    function newfxC(){
    let c = document.getElementById("bDay");
    if(!c.value){
    c.style.color="#CB7A5C";
    c.style.textShadow="2px 2px #f8d3c5";
    }
    }
    function newfxD(){
    let d = document.getElementById('email');
    d.style.color="#CB7A5C";
    d.style.textShadow="2px 2px #f8d3c5";
    }
    function newfxE(){
    let e= document.getElementById('cPNum');
    e.style.color="#CB7A5C";
    e.style.textShadow="2px 2px #f8d3c5";
    }
    function newfxF(){
    let f = document.getElementById('gradeLvl');
    let base="select";
    if(base!==f.value){
        f.style.color="#CB7A5C";
        f.style.textShadow="2px 2px #f8d3c5";
    }
    }
    function newfxG(){
    let g= document.getElementById('clubOp');
    let base="select";
    if(base!==g.value){
        g.style.color="#CB7A5C";
        g.style.textShadow="2px 2px #f8d3c5";
    }
    }
    function newfxH(){
    let h = document.getElementById('reason');
    h.style.color="#CB7A5C";
    h.style.textShadow="2px 2px #f8d3c5";
    }

function resetted(event){
    let confirmReset=confirm("Are you sure you want to reset? (reseting will clear all inputted data)");
    if(confirmReset){
    document.getElementById('mainForm').reset();
    }else{
        event.preventDefault();
    }
}

function render(){
if(data.length===0){
    document.getElementById('dataInput').innerHTML=`
    <tr>
    <td colspan="9" id='noData'>No Data Yet</td>
    </tr>
    `
}
else{
    document.getElementById('dataInput').innerHTML=data.map(i=>
    `
    <tr>
        <td class="newData">${i.ID}</td>
        <td class="newData">${i.fName}</td>
        <td class="newData">${i.bDay}</td>
        <td class="newData">${i.email}</td>
        <td class="newData">${i.cPNum}</td>
        <td class="newData">${i.gLvl}</td>
        <td class="newData">${i.status}</td>
        <td class="newData">${i.clubOp}</td>
        <td class="newData">${i.reason}</td>
    </tr>
    `
).join('');
}
}

document.getElementById('club').addEventListener('change', filterClub);
function filterClub(){
    let filter=document.getElementById('club').value;
    if(filter!='All'){
    let filtered=data.filter(selectClub);
    

    function selectClub(i){
        return i['clubOp'].toLowerCase()==filter.toLowerCase();
    }
    document.getElementById('dataInput').innerHTML=filtered.map(i=>
    `
    <tr>
        <td class="newData">${i.ID}</td>
        <td class="newData">${i.fName}</td>
        <td class="newData">${i.bDay}</td>
        <td class="newData">${i.email}</td>
        <td class="newData">${i.cPNum}</td>
        <td class="newData">${i.gLvl}</td>
        <td class="newData">${i.status}</td>
        <td class="newData">${i.clubOp}</td>
        <td class="newData">${i.reason}</td>
    </tr>
    `
).join('');
    }else{
    document.getElementById('dataInput').innerHTML=data.map(i=>
    `
    <tr>
        <td class="newData">${i.ID}</td>
        <td class="newData">${i.fName}</td>
        <td class="newData">${i.bDay}</td>
        <td class="newData">${i.email}</td>
        <td class="newData">${i.cPNum}</td>
        <td class="newData">${i.gLvl}</td>
        <td class="newData">${i.status}</td>
        <td class="newData">${i.clubOp}</td>
        <td class="newData">${i.reason}</td>
    </tr>
    `
).join('');
}
}