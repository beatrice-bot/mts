$(function(){
setInterval(timestamp, 1000);//fungsi yang dijalan setiap detik, 1000 = 1 detik
});
 
//Fungi ajax untuk Menampilkan Jam dengan mengakses File ajax_timestamp.php
function timestamp() {
$.ajax({
url: 'ajax_timestamp.php',
success: function(data) {
$('#timestamp').html(data);
},
});
}
$(document).ready(function () {
    $("#loginsiswa").click(function () {
        var username = $('#siawauser').val();
        var password = $('#siswapassword').val();
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
                    $('div#hasilLogin').addClass("alert btn-warning card-login");
                },
                success: function (data) {
                    if (data.gagal) { 
                        $('div#loginPanel').hide();
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').text("Maaf Pasword Tidak Cocok: " + data.gagal);
                        $('div#hasilLogin').addClass("alert btn-danger card-login");
						setTimeout(function () {
                        $('div#hasilLogin').hide();
                        $('div#loginPanel').show();
						}, 3000);
                    } else { 
                        $('div#loginPanel').hide();
                        $('div#hasilLogin').removeAttr("style");
                        $('div#hasilLogin').removeClass();
                        $('div#hasilLogin').html('<img src="ajax-loader.gif" width="30px" height="30px"/> &nbsp;Tunggu Sedang Proses ....');
                        $('div#hasilLogin').addClass("alert btn-success card-login");
                        setTimeout(function () {
	                    window.location.href = "/";
                        }, 3000);
                    }
                } 
            }); 
        } 
        else {
            $('div#loginPanel').hide();
            $('div#hasilLogin').removeClass();
            $('div#hasilLogin').text("Pilih Kelas, Nama dan Ketik Kata Sandi"); 
            $('div#hasilLogin').addClass("alert btn-warning card-login");
			setTimeout(function () {
                        $('div#loginPanel').show();
                        $('div#hasilLogin').hide();
						}, 1000);
        } 
        $('div#hasilLogin').fadeIn();
        return false;
    });
$.ajax({
			type: "POST",
			url: "config/namakelas.php",
			dataType: "json",
			success: function(response){
				setTimeout(function(){
					$("#kelasuser").html(response.data_kelas).show();
					$("#siawauser").html(response.data_nama).show();
				}, 1000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
$("#kelasuser").change(function(){
		$.ajax({
			type: "POST",
			url: "config/namasiswa.php",
			data: {kelasuser : $("#kelasuser").val()},
			dataType: "json",
			success: function(response){
				setTimeout(function(){
					$("#siawauser").html(response.data_siswa).show();
					$("#guru").html(response.data_guru).show();
				}, 1000);
			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Tidak Di ketemukan");
			}
		});
    });

});
