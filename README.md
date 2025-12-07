# BANKON GIDA WEB SİTESİ

## 📁 DOSYALAR

Bu web sitesi aşağıdaki dosyalardan oluşur:

1. **index.html** - Ana Sayfa
2. **hakkimizda.html** - Hakkımızda sayfası
3. **urunlerimiz.html** - Ürünlerimiz sayfası
4. **iletisim.html** - İletişim sayfası
5. **style.css** - Tüm stillendirme dosyası
6. **script.js** - JavaScript dosyası (menü, formlar vb.)

## 🎨 KULLANILAN RENKLER

- **Turuncu**: #FF8C00 (Logo'dan)
- **Yeşil**: #2D5F3F (Logo'dan)
- Beyaz ve gri tonları

## 🚀 NASIL KULLANILIR?

### Adım 1: Dosyaları İndirin
1. Tüm dosyaları aynı klasöre kaydedin
2. Logo dosyanızı `logo.png` olarak aynı klasöre koyun

### Adım 2: Visual Studio Code'da Açın
1. Visual Studio Code'u açın
2. File > Open Folder > Dosyalarınızın olduğu klasörü seçin
3. Sol tarafta tüm dosyalarınızı göreceksiniz

### Adım 3: Tarayıcıda Görüntüleyin
**Seçenek A - Doğrudan Açma:**
1. `index.html` dosyasına sağ tıklayın
2. Tarayıcınızla açın (Chrome, Firefox, Edge vb.)

**Seçenek B - Live Server Kullanma (ÖNERİLİR):**
1. VS Code'da Extensions'a gidin (Ctrl+Shift+X)
2. "Live Server" yazın ve yükleyin
3. `index.html` dosyasına sağ tıklayın
4. "Open with Live Server" seçin
5. Otomatik olarak tarayıcıda açılacak
6. Dosyalarda değişiklik yaptıkça otomatik güncellenecek!

## 📝 DÜZENLEME REHBERİ

### İletişim Bilgilerini Değiştirme
Tüm HTML dosyalarının en altındaki Footer bölümünde:
```html
<p><i class="fas fa-phone"></i> Telefon: +90 XXX XXX XX XX</p>
<p><i class="fas fa-envelope"></i> Email: info@bankon.com.tr</p>
<p><i class="fas fa-map-marker-alt"></i> Adres: İstanbul, Türkiye</p>
```
Bu bilgileri kendi bilgilerinizle değiştirin.

### Renkleri Değiştirme
`style.css` dosyasının en üstündeki `:root` bölümünde:
```css
--primary-color: #FF8C00; /* Turuncu */
--secondary-color: #2D5F3F; /* Yeşil */
```
Bu kodları istediğiniz renklerle değiştirebilirsiniz.

### Ürün Ekleme/Çıkarma
`urunlerimiz.html` dosyasında ürün kartlarını kopyalayıp yapıştırarak yeni ürünler ekleyebilirsiniz.

### Resim Ekleme
1. Resimlerinizi web sitesi klasörüne koyun
2. HTML'de şöyle kullanın:
```html
<img src="resim-adi.jpg" alt="Açıklama">
```

## 🌐 ONLINE YAYINLAMA

### Ücretsiz Seçenekler:

#### 1. NETLIFY (ÖNERİLİR - EN KOLAY)
1. https://www.netlify.com adresine gidin
2. Sign up (ücretsiz kayıt olun)
3. "Add new site" > "Deploy manually"
4. Tüm dosyalarınızı sürükleyip bırakın
5. 2 dakikada siteniz yayında!
6. Ücretsiz alan adı: yoursite.netlify.app

#### 2. VERCEL
1. https://vercel.com adresine gidin
2. GitHub ile giriş yapın (ücretsiz)
3. Projenizi yükleyin
4. Otomatik yayınlanır

#### 3. GITHUB PAGES
1. GitHub hesabı oluşturun
2. Yeni repository oluşturun
3. Dosyalarınızı yükleyin
4. Settings > Pages > Source: main branch
5. Siteniz yayında!

### Ücretli Seçenekler:
- **Hostinger** (3-5€/ay) - Türkçe destek
- **Bluehost** ($3-5/ay)
- **SiteGround** ($4-7/ay)

Bu servisler ile kendi domain adınızı da alabilirsiniz (örn: www.bankon.com.tr)

## 📚 İNDİRMENİZ GEREKEN KÜTÜPHANE YOK!

Bu web sitesi harici kütüphane kullanıyor:
- **Font Awesome** (ikonlar için) - CDN üzerinden otomatik yükleniyor

İnternet bağlantısı olmadan çalışması için Font Awesome'ı indirmek isterseniz:
1. https://fontawesome.com adresine gidin
2. Free download
3. Dosyaları projenize ekleyin
4. HTML'deki CDN linkini değiştirin

## 🔧 GELİŞTİRME ÖNERİLERİ

### Sonra Ekleyebileceğiniz Özellikler:
1. **Google Maps** - İletişim sayfasına harita ekleme
2. **WhatsApp Butonu** - Hızlı iletişim için
3. **Ürün Resimleri** - Gerçek ürün fotoğrafları
4. **Blog** - Haberler ve duyurular için
5. **Galeri** - Fotoğraf galerisi
6. **E-ticaret** - Online sipariş sistemi (PHP gerekir)

## 📱 MOBİL UYUMLU

Web sitesi tamamen responsive (mobil uyumlu) tasarlanmıştır:
- Telefonda düzgün görünür
- Tablet'te düzgün görünür
- Bilgisayarda düzgün görünür

## ⚡ PERFORMANS

- Hızlı yükleme
- Optimize edilmiş kod
- Modern tasarım
- SEO dostu yapı

## 🆘 SORUN GİDERME

**Logo görünmüyor:**
- Logo dosyanızı `logo.png` olarak kaydedin
- Veya HTML'deki `src="logo.png"` kısmını değiştirin

**Renkler farklı görünüyor:**
- Tarayıcınızın cache'ini temizleyin (Ctrl+F5)

**Mobil menü çalışmıyor:**
- `script.js` dosyasının doğru yüklendiğinden emin olun
- Tarayıcı konsolunu kontrol edin (F12)

## 📞 DESTEK

Sorun yaşarsanız:
1. Dosyaların hepsinin aynı klasörde olduğundan emin olun
2. Dosya isimlerinin doğru olduğunu kontrol edin
3. Tarayıcı konsolunu kontrol edin (F12)

## ✅ YAPILACAKLAR LİSTESİ

- [ ] Logo dosyasını ekle
- [ ] İletişim bilgilerini güncelle
- [ ] Gerçek ürün fotoğrafları ekle
- [ ] Google Maps koordinatlarını ekle
- [ ] Şirket adresini detaylandır
- [ ] Sosyal medya linklerini ekle

---

**İyi Çalışmalar! 🎉**

Bu web sitesi profesyonel, modern ve kullanımı kolaydır. İhtiyacınıza göre özelleştirebilirsiniz!