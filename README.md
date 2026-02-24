# HyundongJin.io

Personal academic homepage for **Hyundong Jin**, hosted via GitHub Pages.

---

## 📁 Repository Structure

```
HyundongJin.io/
│
├── index.html                  ← 메인 페이지 (내용 수정은 여기만 하면 됨)
│
├── assets/
│   ├── css/style.css           ← 모든 스타일 (색상, 레이아웃, 폰트)
│   └── js/script.js            ← 스크롤 애니메이션, 네비게이션
│
├── media/
│   ├── profile.jpg             ← ⚠️ 프로필 사진 직접 추가 필요
│   └── research/               ← 논문 썸네일 이미지 (선택)
│
└── README.md
```

---

## 🚀 GitHub Pages 배포 방법

### 방법 A — GitHub 웹에서 업로드 (가장 쉬움)

1. GitHub에서 `HyundongJin.io` 이름으로 새 레포 생성
2. **"Add file → Upload files"** 클릭
3. 모든 파일 드래그&드롭 업로드
4. Commit → `https://jin0316.github.io/HyundongJin.io/` 에 자동 반영

   > Settings → Pages → Source를 `main` 브랜치로 설정 필요

### 방법 B — Git 커맨드라인

```bash
git clone https://github.com/Jin0316/HyundongJin.io.git
cd HyundongJin.io
# 파일 복사 후
git add .
git commit -m "Redesign homepage"
git push origin main
```

---

## ✏️ 내용 수정 방법

모든 내용은 **`index.html`** 에 있습니다.

| 수정 항목 | 위치 |
|---|---|
| 바이오 / 소개글 | `#hero` 섹션 |
| 학력 | `#about` 섹션의 `.edu-list` |
| 논문 추가 | `#publications` 섹션 — `.pub-item` 블록 복사 |
| 수상 / 특허 | `#awards` 섹션 |
| 프로젝트 | `#projects` 섹션 |
| 리뷰어 활동 | `#services` 섹션 |

### 논문 하나 추가하는 방법

```html
<div class="pub-item">
  <div class="pub-venue-row">
    <span class="venue-badge conf">CVPR 2027</span>
  </div>
  <p class="pub-title">논문 제목</p>
  <p class="pub-authors">
    <strong>Hyundong Jin</strong>, 공저자1, 공저자2
  </p>
  <div class="pub-links">
    <a href="논문링크" target="_blank">Paper</a>
    <a href="코드링크" target="_blank">Code</a>
  </div>
</div>
```

- 컨퍼런스 논문: `venue-badge conf` 클래스 사용 (파란색)
- 저널 논문: `venue-badge` 클래스만 사용 (초록색)

### Google Scholar 링크 수정

`index.html`에서 `YOUR_ID` 부분을 본인 Scholar ID로 교체:
```html
<a class="pill" href="https://scholar.google.com/citations?user=YOUR_ID" ...>
```

---

## 🖼️ 프로필 사진 추가

`media/profile.jpg` 위치에 사진 파일을 추가하세요.
(파일명을 바꾸려면 `index.html`의 `src="media/profile.jpg"` 부분도 수정)

---

## 🎨 색상 변경

`assets/css/style.css` 상단의 `:root` 변수를 수정:

```css
:root {
  --accent:  #2563eb;   /* 파란색 링크/배지 */
  --green:   #059669;   /* 저널 배지 초록색 */
}
```
