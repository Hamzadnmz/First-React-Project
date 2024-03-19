/*
! React Bileşenleri (Component)
* Kullanıcı arayüzü oluşturmak için kullanılan
* temel yapı taşlarıdır. (Yapboz Parçaları)
* Bileşen oluşturma :
* Bir tane fonksiyon oluşturuyoruz 
* Fonksiyonun ismine bikeşenin ismini veriyoruz.
* Bileşin ismi her zaman Büyük harfle başlamalı.
* Birden fazla kelimeden oluşuyorsa her kelimenin ilk harfi büyük başlar.
* Bileşenler return satırında kullanıcının göreceği arayüzü
* döndürmek zorundadır . (JSX - Javascript XML)
*Jsx kodu tek bir kapsayıcıya sahip olmalıdır
*/

function Header() {
  // Bu veri api'den gelmiş gibi düşünelim
  // Bu veriye göre ekrana basılacak butona karar verelim
  const isLogged = true;

  //api'dan gelen kullanıcı
  const userName = "Furkan";

  return (
    <header>
      <h1>REACT</h1>

      {/* Ve eperatörü ile koşullu renderlama  */}
      {userName && <b>{userName}</b>}

      {/* Terneray ile koşullu renderlama */}
      {isLogged === true ? (
        <button style={{ background: "red" }}>Çıkış Yap</button>
      ) : (
        <button style={{ background: "green" }}>Giriş Yap </button>
      )}
    </header>
  );
}

// Bu bileşeni app.js'de kullanmak için export etmeliyiz
export default Header;
