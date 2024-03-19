`npx create-react-app` komutu ile react uygulaması oluşturabiliyoruz.

`npm start` ile react projesini ayağa kaldırabiliyoruz.
(terminalin proje klasöründe olduğundan emin ol)

`npm install / i  paket_ismi` bir kütüphaneyi projeyi kurmaya yarar
`npm uninstall paket_ismi` bir kütüphaneyi projeden kaldırmaya yarar

1. node_modules: Bu kalsör projenin bağımlılıklarını (3.parti paketler) örneğin React vee diğer paketleri içerir.Yeni indirdiğimiz kütüphanelerin kodlarıda buraya eklenir Bu elle düzenlemiyoruz.

2. public: Bu klasör, projenin genel olarak erişilebilir olmasını istediğimiz dosyaları bulundurduğumuz klasöjr.

3. gitignore: Bu dosya, git'e yüklenmesini istemedeğimiz klasörleri ve dosyaları tanımladığımız yer.
   Örneğin içerisine "node_modules" yazarsak projeyi
   githuba gönderirken belirtilen dosya gitmez.

4. package.json: Bu doysa, bağımlılıkları (kütüphaneler) , bazı komutları ve diğer projeye ayarlarını içeren JSON dosyası. Projemizin kimliği.

5. package.lock.json: Bağımlılıklarımızın spesifik sürümlerini ve bağımlılıklar arasındaki ilişkinin verisini tutar.

6. src: Bu klasör, uygulamamızın kaynak kodunu içerir. Projeyi bu dosya içerisinde geliştririz.

- - App.css / index.css: Stillendirme dosyaları

- - App.js: Varsayılan olarak oluşturulan temel uygulama bileşeni . Bu dosya içerisine yazdıklarımız ekrana basılır.

- - index.js: React uygulamasının başlangıç noktasıdır. Bu dosya uygulamada oluşturduğumuz sayfa ve bileşeneleri DOM'un içerisinde yerleştirildiği yerdir.

# Koşullu Renderlama

- Ekrana basılacak olan arayüzün bir koşula göre ekrana gelme durumuna denir.

- Koşullu renderlama için iki yöntem vardır

- - Terneray Operator (? :)
- eğer else durumu da varsa yani koşul gerçekleşmezse'de ekrana bir şey
  basılıcaksa bu yöntem kullanılır

- - Ve Operatörü (&&)
- eğer else durumu yoksa yani koşul gerçekleşmezse ekrana bir şey
  basılmayacaksa bu yöntem kullanılır

  # Çoklu renderlama

  - Birden fazla elemanı basmak isdeğimiz durumda kullandığımız yapı

  - Bir dizi içerisinde ki eleman sayısı kadar ekrana basmak işlemi yapmak
    istiyorsak map yöntemi kullanırız

  # Prop (Veri Aktarım Yöntemi)

  - Bir bileşenden diğerine veri aktarmak için kullandığımız yöntemdir

  - Her zaman üstten aşşaağıya doğru üstteki bileşene doğru bir aktarım yönü vardır.
# First-React-Project
