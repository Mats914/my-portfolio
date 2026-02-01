# دليل نشر مشروع Portfolio على VPS

دليل خطوة بخطوة لرفع مشروعك على استضافة VPS.

---

## الخطوة 1: بناء المشروع محلياً

```bash
# تثبيت التبعيات
npm install

# بناء المشروع للإنتاج
npm run build
```

سيتم إنشاء مجلد `dist/` يحتوي على جميع الملفات الجاهزة للنشر.

---

## الخطوة 2: التحضير على الـ VPS

### الاتصال بالـ VPS

```bash
ssh root@your-server-ip
```

أو باستخدام مستخدم عادي:
```bash
ssh username@your-server-ip
```

### تثبيت المتطلبات

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nginx -y
```

**CentOS/RHEL:**
```bash
sudo yum install nginx -y
```

---

## الخطوة 3: رفع الملفات للـ VPS

### الطريقة أ: استخدام SCP

من جهازك المحلي (في مجلد المشروع):
```bash
# إنشاء المجلد على السيرفر أولاً
ssh username@your-server-ip "mkdir -p /var/www/portfolio"

# رفع مجلد dist
scp -r dist/* username@your-server-ip:/var/www/portfolio/
```

### الطريقة ب: استخدام SFTP

استخدم برنامج مثل FileZilla أو WinSCP:
- Host: عنوان IP أو دومين الـ VPS
- Username: اسم المستخدم
- Password/Key: كلمة المرور أو مفتاح SSH
- رفع محتويات مجلد `dist` إلى `/var/www/portfolio/`

### الطريقة ج: استخدام Git

على الـ VPS:
```bash
# استنساخ المشروع
git clone https://github.com/your-username/portfolio.git /var/www/portfolio-src
cd /var/www/portfolio-src

# بناء المشروع على السيرفر
npm install
npm run build

# نقل الملفات
sudo mkdir -p /var/www/portfolio
sudo cp -r dist/* /var/www/portfolio/
```

---

## الخطوة 4: إعداد Nginx

### نسخ ملف الإعدادات

```bash
sudo cp deploy-nginx.conf /etc/nginx/sites-available/portfolio
```

أو إنشاء الملف يدوياً:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

الصق محتوى ملف `deploy-nginx.conf` وغيّر:
- `your-domain.com` → دومينك أو IP السيرفر
- `/var/www/portfolio/dist` → مسار مجلد `dist` على السيرفر

### تفعيل الموقع

```bash
# إنشاء رابط رمزي
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# التحقق من الإعدادات
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

---

## الخطوة 5: إعداد SSL (HTTPS) - اختياري

استخدم Let's Encrypt للحصول على شهادة مجانية:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## الخطوة 6: جدار الحماية (Firewall)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## تحديث الموقع عند نشر تعديلات جديدة

```bash
# محلياً: بناء المشروع
npm run build

# رفع الملفات الجديدة
scp -r dist/* username@your-server-ip:/var/www/portfolio/
```

أو إذا استخدمت Git على السيرفر:
```bash
cd /var/www/portfolio-src
git pull
npm run build
sudo cp -r dist/* /var/www/portfolio/
```

---

## استكشاف الأخطاء

| المشكلة | الحل |
|---------|------|
| 404 عند تحديث الصفحة | تأكد أن Nginx يحتوي على `try_files $uri $uri/ /index.html;` |
| الموقع لا يظهر | تحقق من صلاحيات المجلد: `sudo chown -R www-data:www-data /var/www/portfolio` |
| اتصال مرفوض | تأكد أن المنفذ 80 مفتوح في الـ firewall |

---

## ملاحظات

- **المسار:** إذا رفعت محتويات `dist` مباشرة في `/var/www/portfolio/`، فإن `index.html` يكون في الجذر، وهذا صحيح.
- إذا رفعت مجلد `dist` كاملاً، فالمسار يصبح `/var/www/portfolio/dist/` وغيّر ذلك في إعدادات Nginx.
