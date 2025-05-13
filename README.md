# 📦 Flutter Technical Test: Parcel Delivery Tracker

## Overview

This test involves building a **Flutter mobile app** that simulates a **parcel delivery tracking system** using **JWT-based authentication** and **Google Maps API**. The user logs in, views a map with pickup and delivery locations, tracks parcel status, and sees a simulated driver location moving along the delivery route.

---

## ✅ Deliverables

* ✅ **APK** (Android build; iOS is optional)
* ✅ **README.md** explaining setup and usage

---

## 🧩 App Objectives

A simplified parcel delivery tracker where users can:

* 🔐 Log in with JWT authentication (simulated using ReqRes API)
* 🗺️ View pickup and delivery locations on a map
* 🚗 See a route drawn between the two points
* 🔄 Simulate parcel status updates:

  * Order Placed → Picked Up → In Transit → Delivered
* 🧭 View the driver’s (mocked) live location updates

---

## 🔐 Authentication

* **API**: `https://reqres.in/api/login`
* **Credentials**:

  * Email: `eve.holt@reqres.in`
  * Password: `cityslicka`

### Requirements

* Store JWT securely using `flutter_secure_storage`
* On successful login, navigate to protected screens
* Use state management to handle auth state (e.g., `provider`, `flutter_bloc`, `riverpod`)
* Show login screen if token is not available or invalid

---

## 🗺️ Map Integration

### Use:

* `google_maps_flutter` plugin
* Google Maps API Key setup (in `AndroidManifest.xml` and `AppDelegate.swift`)

### Functionality

* Show 3 markers:

  * 📍 Pickup Location
  * 📦 Delivery Location
  * 🚗 Driver's Current Location (mocked)
* Draw route (polyline) between pickup and delivery

  * Use **Google Directions API** or **mock route coordinates**
* Create custom marker icons (optional)

---

## 🚚 Parcel Status Tracking

### UI Component:

* Use `Stepper` or a `LinearProgressIndicator`

### Status Flow:

1. 📝 Order Placed
2. 📤 Picked Up
3. 🚚 In Transit
4. ✅ Delivered

### Behavior:

* Clicking a button should advance the parcel status
* Update the UI to reflect current stage

---

## 📡 Mock Driver Movement

* Animate the driver's location along the route
* Use `Timer.periodic()` or a `Stream.periodic()` to simulate real-time location updates
* Interpolate coordinates to simulate smooth movement
* Optional: Use `Tween` and `AnimationController` for smoother transitions

---

## 🧠 Architecture & Code Quality

### Expectations

* Proper **state management**
* Clean **separation of concerns**:

  * `data/` - API, models, storage
  * `domain/` - business logic, services
  * `presentation/` - UI, widgets, screens
* Reusable widgets/components
* Meaningful **comments** and **naming conventions**
* Handle **edge cases** (e.g., no internet, bad login)
* ✅ Include **unit tests** for critical logic

---

## 🔧 Recommended Packages

| Function         | Package                                  |
| ---------------- | ---------------------------------------- |
| HTTP Requests    | `http`                                   |
| Secure Storage   | `flutter_secure_storage`                 |
| State Management | `provider` / `flutter_bloc` / `riverpod` |
| Maps             | `google_maps_flutter`                    |
| Polyline Drawing | `google_maps_webservice` or mocked data  |
| Animation        | `flutter_animate` / `flutter_tween`      |

---

## 🗂️ Suggested Folder Structure

```
lib/
├── main.dart
├── core/
│   ├── constants.dart
│   └── helpers.dart
├── data/
│   ├── models/
│   ├── services/
│   └── storage/
├── presentation/
│   ├── screens/
│   ├── widgets/
│   └── auth/
├── domain/
│   └── providers/
test/
```

---

## 🧪 Unit Testing

* Mock services for login and parcel status
* Test state transitions (e.g., status update)
* Test secure storage functions
* Validate marker and polyline logic (if abstracted)

---

## 📘 References

* [Google Maps Flutter Plugin](https://pub.dev/packages/google_maps_flutter)
* [Google Directions API](https://developers.google.com/maps/documentation/directions)
* [Flutter Secure Storage](https://pub.dev/packages/flutter_secure_storage)
* [ReqRes Fake API](https://reqres.in/)
