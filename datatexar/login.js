
$(function(){setInterval(timestamp, 1000);});
function timestamp() {
$.ajax({
url: 'ajax_timestamp',
success: function(data) {
$('#timestamp').html(data);
},
});
}
$(document).ready(function () {
    $("#ceklogin").submit(function () {
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();
        if (username && password) { 
            $.ajax({
                dataType: "json",
                type: "POST",
                url: "config/wslogin",
                data: {login: username, passwd: password},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('div#hasilLogin').text("responseText: " + XMLHttpRequest.responseText +
                                             ", textStatus: " + textStatus +
                                             ", errorThrown: " + errorThrown);
                    $('div#hasilLogin').removeClass();
                    $('div#hasilLogin').addClass("alert btn-warning card-login");
                },
                success: function (data) {
                    if (data.gagal) { 
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').text("Maaf Pasword Tidak Cocok: " + data.gagal);
                        $('div#hasilLogin').addClass("alert btn-danger card-login");
						setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
                    } else { 
                        $('div#loginPanel').hide();
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>');
                        $('div#hasilLogin').addClass("alert btn-success card-login");
                        setTimeout(function () {
	                    window.location.href = "/";
                        }, 1000);
                    }
                } 
            }); 
        } 
        else {
            $('div#hasilLogin').removeClass();
            $('div#hasilLogin').text("Silahkan Pilih Nama Guru dan Ketik password"); 
            $('div#hasilLogin').addClass("alert btn-warning card-login");
			setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
        } 
        $('div#hasilLogin').fadeIn();
        return false;
    });
    $("#loginsiswa").submit(function () {
        var username = $('[name="siawauser"]').val();
        var password = $('[name="siswapassword"]').val();
        if (username && password) { 
            $.ajax({
                dataType: "json",
                type: "POST",
                url: "config/wslogin_siswa",
                data: {login: username, passwd: password},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('div#hasilLogin').text("responseText: " + XMLHttpRequest.responseText +
                                             ", textStatus: " + textStatus +
                                             ", errorThrown: " + errorThrown);
                    $('div#hasilLogin').removeClass();
                    $('div#hasilLogin').addClass("alert alert-warning");
                },
                success: function (data) {
                    if (data.gagal) { 
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').text("Maaf Pasword Tidak Cocok: " + data.gagal);
                        $('div#hasilLogin').addClass("alert alert-danger");
						setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
                    } else { 
                        $('div#loginPanel').hide();
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>');
                        $('div#hasilLogin').addClass("alert alert-success");
                        setTimeout(function () {
	                    window.location.href = "/";
                        }, 1000);
                    }
                } 
            }); 
        } 
        else {
            $('div#hasilLogin').removeClass();
            $('div#hasilLogin').text("Pilih Kelas, Nama Siawa dan Ketik password"); 
            $('div#hasilLogin').addClass("alert alert-warning");
			setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
        } 
        $('div#hasilLogin').fadeIn();
        return false;
    });
    $("#loginkelulusan").submit(function () {
        var username = $('[name="namausersiswa"]').val();
        var password = $('[name="passwordniksiswa"]').val();
        var tahun = $('[name="tahunlulussiswa"]').val();
        var jurusan = $('[name="jurusansiswa"]').val();
        if (username && password) { 
            $.ajax({
                dataType: "json",
                type: "POST",
                url: "config/wslogin_alumni",
                data: {login: username, passwd: password, thnlulus: tahun, jrssiswa: jurusan},
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('div#hasilLogin').text("responseText: " + XMLHttpRequest.responseText +
                                             ", textStatus: " + textStatus +
                                             ", errorThrown: " + errorThrown);
                    $('div#hasilLogin').removeClass();
                    $('div#hasilLogin').addClass("alert alert-warning");
                }, 
                success: function (data) {
                    if (data.gagal) { 
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').text("Maaf N.I.K Tidak Cocok: " + data.gagal);
                        $('div#hasilLogin').addClass("alert alert-danger");
						setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
                    } else { 
                        $('div#loginPanel').hide(); 
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>');
                        $('div#hasilLogin').addClass("alert alert-success");
                        setTimeout(function () {
	                    window.location.href = "/";
                        }, 1000);
                    }
                } 
            }); 
        } 
        else {
            $('div#hasilLogin').removeClass();
            $('div#hasilLogin').text("Form Pengisisan Tidak Boleh Kosong"); //keterangan jika input ada yang kosong
            $('div#hasilLogin').addClass("alert alert-warning");
			setTimeout(function () {
                        $('div#hasilLogin').hide();
						}, 2000);
        } 
        $('div#hasilLogin').fadeIn();
        return false;
    });
$("#tahunlulussiswa").change(function(){
     $('.kommape4').hide();
		$.ajax({
			type: "POST",
			url: "config/user_login_tahun_kelulusan",
			data: {idtahun : $("#tahunlulussiswa").val()},
			dataType: "json",
   beforeSend: function(){
  $('#hasilLoginusertahunlulussiswa').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>').show();
   },
			success: function(response){
				setTimeout(function(){
			    $('#hasilLoginusertahunlulussiswa').hide();
				$("#jurusansiswa").html(response.data_kelulusan).show();
				}, 3000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
    });
$("#jurusansiswa").change(function(){
     $('.kommape5').hide();
		$.ajax({
			type: "POST",
			url: "config/nama_user_kelulusan",
			data: {idjurusan : $("#jurusansiswa").val(),thnjurusan : $("#tahunlulussiswa").val()},
			dataType: "json",
   beforeSend: function(){
  $('#hasilLoginjurusansiswa').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>').show();
   },
			success: function(response){
				setTimeout(function(){
			    $('#hasilLoginjurusansiswa').hide();
				$("#namausersiswa").html(response.nama_kelulusan).show();
				}, 3000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
    });
	$("#kelasuser").change(function(){ 
     $('.kommapel').hide();
     $('.kommape2').hide();
	$("#hilang").hide();
     $("#guru").hide();
		$.ajax({
			type: "POST", 
			url: "config/user_siswa",
			data: {kelasuser : $("#kelasuser").val()},
			dataType: "json",
			 beforeSend: function(){
  $('#hasilLoginuser').html('<img src="ajax-loader.gif" width="30px" height="30px;"/> &nbsp;<font size="3">Tunggu Sedang Proses ....</font>').show();
    $("#guru2").show();
   },
			success: function(response){ 
				setTimeout(function(){
				   $("#siawauser").html(response.data_kelas).show();
                   $('#hasilLoginuser').hide();
                   $('.kommape2').show();
					$("#guru").html(response.data_guru).show();
					$("#guru2").hide();
				}, 3000);
			},
			error: function (xhr, ajaxOptions, thrownError) { 
				alert(thrownError); 
			}
		});
    });
$("#guru").hide();
$("#guru3").show();
$("#username").change(function(){
	$("#guru").hide();
	$("#putar").hide();
	$("#hilang").hide();
		$.ajax({
			type: "POST",
			url: "user_login_guru",
			data: {idguru : $("#username").val()},
			dataType: "json",
   beforeSend: function(){
    $("#guru2").show();
   },
			success: function(response){
				setTimeout(function(){
	                $("#guru2").hide();
	                $("#guru").show();
					$("#guru").html(response.data_guru).show();
				}, 3000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
    });
$(".kommapel").change(function(){
	$("#guru").hide();
	$("#putar").hide();	
		$.ajax({
			type: "POST",
			url: "user_login_siswa",
			data: {idsiswa : $("#siawauser").val()},
			dataType: "json",
   beforeSend: function(){
    $("#guru2").show();
   },
			success: function(response){
				setTimeout(function(){
	                $("#guru2").hide();
	                $("#guru").show();
					$("#guru").html(response.data_guru).show();
				}, 3000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
    });
});
