import Card from "./Card";

/*
! JSX (Javascript XML);
*react tarafında kullanılan söz dizilimi
*Ksx javascript içerisinde HTML benzeri bir yapıyla
*Arayüzü tanımlamaya yarar.

* HTML'den farkları:
* {}: doğrudan jsx içerisine js kodu yazabiliyoruz.
* className: sınıf tanımlarken class yerine kullanılır.
* inline css: {{}} çift parantez içerisine stilleri yazarız./ camelCase
* <div/> bütün etiketler self closing olabilir.
* input / img / br: gibi etiketlerde kapanış mutlaka olmalı.
* olay izleme: izleme istediğimiz olayları direkt etikete tanımlıyoruz.
* <> : fragment
*/

function Main() {
  const text = "Sayfamıza Hoşgeldin.";
  const url =
    "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2024991-00-A-2-01.png";

  const formatText = (uzunYazi) => {
    return uzunYazi.slice(0, 20) + "...";
  };

  const selamla = () => {
    alert("merhaba");
  };

  const status = "success"; // error - success

  return (
    <main>
      <h3>{text}</h3>

      <p className="text-area">{formatText("Merhaba günümüz nasıl geçti ?")}</p>

      <div
        style={{ backgroundColor: "red", height: "100px", margin: "30px" }}
      />

      {/* Kartlar */}
      <div className="wrapper">
        <Card
          image="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/1905127-00-A_0_2000.jpg"
          category="giyim"
          title="Hoodie"
        />
        <Card
          image="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/LIFESTYLE/TOPS/TSHIRTS/7654393-00-A_2_2000.jpg"
          category="elektronik"
          title="Klavye"
        />
        <Card
          image="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/TOPS/HOODIES_SWEATSHIRTS/2024991-00-A-2-01.png"
          category="bilgisiyar"
          title="monitör"
        />
      </div>
      {/* <img src={url} width={400} />

      <br />

      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />

      <button
        onClick={() => {
          alert("selam naber?");
        }}
      >
        Gönder
      </button>

      <button onClick={selamla}>Selamlar</button>*/}

      {/*Birden fazla koşul olduğu seneryoda örnek */}
      {status === "loading" ? (
        <p>Yükleniyor...</p>
      ) : status === "error" ? (
        <p>Üzgünüz bir hata oluştu :(</p>
      ) : (
        <p> Veri Başarıyla alındı </p>
      )}
    </main>
  );
}

export default Main;
