# Email Infrastructure Setup — restauranttools.ai

> Kompletna dokumentacja konfiguracji emailowej. Jeśli coś padnie — tu jest wszystko co trzeba odtworzyć.

## 📧 Konta Email

| Email | Rola | Platforma |
|-------|------|-----------|
| `claudia@restauranttools.ai` | Operacyjna (outreach, warmup) | Google Workspace |
| `mark@restauranttools.ai` | Forward → marek.bodynek@gmail.com | Google Workspace |

## 🔐 Dane dostępowe

### Google Workspace
- **Admin Panel:** https://admin.google.com
- **Login:** claudia@restauranttools.ai
- **Hasło:** w `~/.secrets/credentials.md`

### Instantly.ai (Email Warmup)
- **Login:** https://app.instantly.ai
- **Email:** claudia@restauranttools.ai
- **Hasło:** w `~/.secrets/credentials.md`
- **Plan:** Free trial (warmup unlimited)
- **Połączenie:** OAuth (G-Suite)

## 🛡️ Email Authentication (DNS Records)

Wszystkie rekordy DNS są na **Cloudflare** (Zone ID: `2e8934a471e4a1b622c803cd1f232fe4`).

### SPF
```
Typ: TXT
Host: restauranttools.ai
Wartość: v=spf1 include:_spf.google.com ~all
```

### DKIM
```
Typ: TXT
Host: google._domainkey.restauranttools.ai
Wartość: v=DKIM1; k=rsa; p=MIIBIjANBgkqhki... (klucz z Google Admin → Gmail → Authenticate email)
```

**Jak odnowić DKIM:**
1. Google Admin → Apps → Gmail → Authenticate email
2. Kliknij "Generate new record" dla domeny restauranttools.ai
3. Skopiuj wartość rekordu
4. Zaktualizuj TXT record w Cloudflare (API lub dashboard)

### DMARC
```
Typ: TXT
Host: _dmarc.restauranttools.ai
Wartość: v=DMARC1; p=none; rua=mailto:claudia@restauranttools.ai; ruf=mailto:claudia@restauranttools.ai; fo=1
```

**Uwaga:** `p=none` = monitoring only. Po 2-4 tygodniach warmup zmienić na `p=quarantine`, potem `p=reject`.

### MX
```
Typ: MX
Host: restauranttools.ai
Wartość: 
  1  ASPMX.L.GOOGLE.COM
  5  ALT1.ASPMX.L.GOOGLE.COM
  5  ALT2.ASPMX.L.GOOGLE.COM
  10 ALT3.ASPMX.L.GOOGLE.COM
  10 ALT4.ASPMX.L.GOOGLE.COM
```

## 🔥 Warmup Process

### Status
- **Start:** 2026-03-01
- **Platforma:** Instantly.ai
- **Metoda:** Automated warmup via OAuth connection
- **Czas trwania:** 2-4 tygodnie
- **Daily limit:** Zaczyna od ~5 maili/dzień, rośnie do 30+/dzień

### Jak sprawdzić status warmup:
1. Zaloguj się na https://app.instantly.ai
2. Idź do Email Accounts
3. Sprawdź: Health Score, Warmup emails count, Emails sent

### Cel warmup:
- Health Score > 90%
- Minimum 2 tygodnie aktywnego warmup
- Po osiągnięciu → gotowy do cold outreach

## 🔧 Cloudflare API

### Token
- Zapisany w `~/.secrets/credentials.md`
- Uprawnienia: Edit DNS (Zone: restauranttools.ai)
- **Nie trzeba logować się do Cloudflare dashboard** — Claudia zarządza DNS przez API

### Przykład użycia (dodanie rekordu TXT):
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/ZONE_ID/dns_records" \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "TXT",
    "name": "example.restauranttools.ai",
    "content": "wartość",
    "ttl": 1
  }'
```

## 🏗️ Google Workspace OAuth (Instantly)

### Konfiguracja w Google Admin:
1. Admin → Security → API controls → App access control
2. Skonfigurowana aplikacja: **Instantly** (OAuth)
3. Client ID: `536726988839-pt93oro4685dtb1emb0pp2vjgjol5mls.apps.googleusercontent.com`
4. Status: **Trusted** (zaufana)
5. Zakresy: Gmail (1), Sign-in (3)

### Jeśli trzeba ponownie podłączyć:
1. Wejdź na https://app.instantly.ai/app/accounts
2. Kliknij "Add New" → "Gmail / G-Suite" → "Option 1: OAuth"
3. Google powinno pamiętać autoryzację (nie trzeba ponownie w Admin Panel)
4. Jeśli nie — powtórz kroki z Google Admin (Configure new app → Client ID → Trusted)

## 📋 Checklist Recovery (jeśli coś padnie)

### Email nie dochodzi:
- [ ] Sprawdź SPF: `dig TXT restauranttools.ai`
- [ ] Sprawdź DKIM: `dig TXT google._domainkey.restauranttools.ai`
- [ ] Sprawdź DMARC: `dig TXT _dmarc.restauranttools.ai`
- [ ] Sprawdź MX: `dig MX restauranttools.ai`

### Instantly nie łączy się z Gmail:
- [ ] Sprawdź OAuth w Google Admin (API controls → Configured apps)
- [ ] Reconnect w Instantly (Accounts → kliknij konto → Reconnect)

### Cloudflare DNS nie działa:
- [ ] Sprawdź token: `curl -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" -H "Authorization: Bearer TOKEN"`
- [ ] Zone ID: `2e8934a471e4a1b622c803cd1f232fe4`

## 📅 Timeline

| Data | Akcja |
|------|-------|
| 2026-02-26 | Domena restauranttools.ai kupiona, DNS → Cloudflare |
| 2026-02-27 | Site LIVE na Vercel, SSL Full |
| 2026-03-01 | SPF + DKIM + DMARC skonfigurowane |
| 2026-03-01 | Instantly konto + OAuth + warmup włączony |
| ~2026-03-15 | Warmup complete → ready for cold outreach |

---

*Ostatnia aktualizacja: 2026-03-01*
*Maintainer: Claudia (AI) + Marek Bodynek*
