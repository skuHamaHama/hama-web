# HamaHama

### 프로젝트 소개
---

**‘하마하마’ 라는 브랜드는 쿠폰을 활용해 디지털 격차를 줄이기 위해 만들어진 웹페이지입니다.**

<p align="center">
  <br/>
  <img src="https://github.com/user-attachments/assets/ba086291-db0e-4efd-920e-56dc3bca72bd" width="800" height="400">
  <br/>
</p>


### 기술 스택

---

<p>
  <img src="https://github.com/user-attachments/assets/c9fdad67-1477-4c13-bd9d-b136caa66ab2">
</p>



### 구현 기능

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/aeaa9962-3f5a-493c-9813-480e326a0256" width="780" height="420">
</p>


**로그인**

JWT 방식으로 진행했으며, 로그인 이후 발급받은 토큰을 `context API`를 사용하여 전역 state 변수로 지정해주었습니다. 

API 통신의 Header에는 Bearer 값에 **AccessToken**이 있어야지 통신 가능하도록 구현했습니다. 

하단의 카카오, 네이버, 구글 아이콘을 클릭하면 서버에 소셜 로그인을 요청하도록 설정하였습니다.


<p align="center">
  <br/>
  <img src="https://github.com/user-attachments/assets/5fa339c9-1912-4512-9de3-294b18829569" width="650" height="400">
  <br/>
</p>

**쿠폰 알림**

사용자에게 알림을 보낼 수 있는 권한을 획득하기 위해서 `FCM 토큰`을 사용하였습니다.

로그인 요청 시 해당 사용자의 알림 권한 여부에 따라 **메인 화면 상단에 하트 아이콘의 여부로 표시**하였습니다.

**최초 로그인 시** 사용자는 **알림 권한 허용 요청 메시지**를 받게 되고, 이후 권한의 허용 여부는 아이콘으로 재설정이 가능합니다.

<p align="center">
  <br/>
  <img src="https://github.com/user-attachments/assets/3f0dae9d-3152-438e-a28b-27165abf9eeb" width="700" height="250">
  <br/>
</p>

**메인 화면**

쿠폰과 댓글은 최대 6개까지 볼 수 있도록 설정하였으며 더 많은 정보를 보기 위해서는 로그인이 되어있어야 합니다. 

서버로부터 응답 받은 데이터는 `React Query`로 관리하였고, `Pagination`을 이용하여 **페이지 번호를 구현**했습니다.

 
<p align="center">
  <br/>
  <img src="https://github.com/user-attachments/assets/ae65dc2b-324d-4e07-9929-c174e7b6b80a" width="450" height="280">
  <br/>
</p>


**브랜드 검색**

사용자가 키워드 입력 후 Enter나 돋보기 버튼 클릭하면 **키워드가 포함된 모든 브랜드를 검색**할 수 있습니다. 

검색 결과 화면에서 즐겨찾기 설정이 가능하며, 브랜드 클릭 시 해당 쿠폰 리스트를 보여주도록 구현했습니다.

<p>
  <br/>
</p>

**그 외 기능**

<p align="center">
  <img src="https://github.com/user-attachments/assets/f88626d3-b7b6-474a-a924-4e7c9df95822" width="700" height="400">
  <br/>
</p>

<p>
  <br/>
</p>

이 프로젝트의 상세한 문서는 아래 링크에서 PDF 파일로 확인할 수 있습니다.

[프로젝트 문서 보기](hama-web/서경대학교_하마하마.pdf)
