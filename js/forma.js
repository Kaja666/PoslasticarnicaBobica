/* Poruci */

function validacija() {

  if (document.forms[0].ime.value=='') {
    alert("Niste uneli Vase ime i prezime!");
    document.forms[0].ime.focus();
    return false
  }
      
  if (document.forms[0].mail.value=='') {
    alert("Niste uneli e-mail adresu!");
    document.forms[0].mail.focus();
    return false;
  }

  if(document.forms[0].mail.value.indexOf('@') == -1)
  {
    alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
    document.forms[0].mail.focus();
    return false;
  }
      
  if (document.forms[0].telefon.value=='') {
    alert("Niste uneli Vas broj telefona!");
    document.forms[0].telefon.focus();
    return false;
  }
      
  if (document.forms[0].adresa.value=='') {
    alert("Niste uneli Vasu adresu!");
    document.forms[0].adresa.focus();
    return false;
  }
      
  if (document.forms[0].telefon.value=='') {
    alert("Niste uneli Vas broj telefona!");
    document.forms[0].telefon.focus();
    return false;
  }
    
  return confirm("Da li želite da završite sa poručivanjem?");
}

/* Proveri podatke, prvo su skriveni pa se posle kopira sadrzaj iz poja u formi */

function proveri() {
  $(document).ready(function(){
    $("#pime").show();
    $("#pimee").show();
    document.getElementById("pimee").value = document.getElementById("ime").value;
  })
  $(document).ready(function(){
    $("#ptele").show();
    $("#ptelee").show();
    document.getElementById("ptelee").value = document.getElementById("telefon").value;
  })
  $(document).ready(function(){
    $("#pmejl").show();
    $("#pmejle").show();
    document.getElementById("pmejle").value = document.getElementById("mail").value;
  })
  $(document).ready(function(){
    $("#padresa").show();
    $("#padresae").show();
    document.getElementById("padresae").value = document.getElementById("adresa").value;
  })
}

$(document).ready(function(){
  $("#pime").hide();
  $("#ptele").hide();
  $("#pmejl").hide();
  $("#padresa").hide();
  $("#pimee").hide();
  $("#ptelee").hide();
  $("#pmejle").hide();
  $("#padresae").hide();
});


/* Specijalitet meseca fade in and out */

$(document).ready(function(){
  $("#spec").focus(function(){
    $("#spec_").css("display", "inline").fadeOut(5100);
  });
});
$(document).ready(function(){
  $("#spec_").hide();
});
    