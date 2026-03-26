let current = 1;

function startFlow(){
  current = 1;
  resetFlow();
}

function nextStep(){

  let prev = document.getElementById("s"+current);
  prev.classList.remove("active");
  prev.classList.add("done-step");

  current++;

  let next = document.getElementById("s"+current);

  if(next){
    next.classList.add("active","fade");
  } else {
    alert("Flow selesai & stock sudah terupdate ");
  }

}

function resetFlow(){
  document.querySelectorAll('.step').forEach(e=>{
    e.classList.remove('active','done-step');
  });

  document.getElementById("s1").classList.add("active");
}