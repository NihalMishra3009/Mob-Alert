# 🚀 MobAlert Release v1.0.0

### Real-Time Crowd Safety Intelligence Platform

---

### 🌐 Live Platforms & Links
- **Web Dashboard (Vercel)**: [https://mobalert.vercel.app/](https://mobalert.vercel.app/)
- **Backend API (Render)**: `https://mob-alert.onrender.com`
- **Default Admin Demo Access**:
  - **Email**: `admin@mobalert.com`
  - **Password**: `password123` *(or click the "Fill Sample Admin Credentials" button on the login screen)*

---

### 📱 Mobile App v1.0.0 (Flutter)
- **Source Code**: [`MobAlert - Application/`](MobAlert%20-%20Application/)
- **Target OS**: Android & iOS
- **Features**:
  - Live GPS and geofence verification
  - 1-Touch Emergency SOS broadcast
  - Multilingual voice-to-text report transcription
  - Instant risk alerts received via STOMP WebSockets

#### How to build Mobile Release APK:
```bash
cd "MobAlert - Application"
flutter pub get
flutter build apk --release --dart-define=API_BASE_URL=https://mob-alert.onrender.com
```
*Output: `build/app/outputs/flutter-apk/app-release.apk`*

---

### 🌟 Key Highlights & Changelog (v1.0.0)
- **Full Rebranding to MobAlert**: Complete codebase, UI, logos, and mobile assets rebranded.
- **DBSCAN Density Clustering**: Dynamic spatial hotspot computation over real-time coordinates.
- **Gemini 2.5 Flash Semantic AI**: AI incident threat classification with fallback guards.
- **STOMP / SockJS WebSocket Broadcasting**: Sub-second live updates to all connected organizers.
- **Production Ready**: Full Docker Compose, Supabase PostgreSQL, Render backend, and Vercel frontend configurations.
