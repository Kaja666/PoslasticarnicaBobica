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
    alert("Niste uneli e-mail adresu u odgovarajucem formatu! (mora sadrzati @)");
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
      
  if (document.forms[0].torte.value=='Biram tortu' || document.forms[0].krofne.value=='Biram krofnu' || document.forms[0].bombone.value=='Biram bombone') {
    alert("Niste uneli odabrali slatkiš!");
    document.forms[0].torte.focus();
    return false;
  }

  confirm("Da li želite da završite sa poručivanjem?");
  alert("Uspešno ste poručili Vaš slatkiš! Želimo Vam sladak ostatak dana! :)");
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
  $(document).ready(function(){
    $("#pslatko").show();
    $("#pslatkoe").show();
    if (document.forms[0].birajt.value!='Biram tortu') {
      document.getElementById("pslatkoe").innerHTML = document.getElementById("birajt").value;
      $("#nisiBirao").hide();
    }
    else if (document.forms[0].birajk.value!='Biram krofnu') {
      document.getElementById("pslatkoe").innerHTML = document.getElementById("birajk").value;
      $("#nisiBirao").hide();
    } 
    else if (document.forms[0].birajb.value!='Biram bombone') {
      document.getElementById("pslatkoe").innerHTML = document.getElementById("birajb").value;
      $("#nisiBirao").hide();
    }
    else{
      $("#pslatko").hide();
      $("#nisiBirao").show();
    }
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
  $("#pslatko").hide();
  $("#pslatkoe").hide();
  $("#nisiBirao").hide();
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
    