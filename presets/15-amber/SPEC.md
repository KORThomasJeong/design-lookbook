---
number: 15
codename: Amber
inspired-by: Kakao (kakaocorp.com) — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 이 문서의 모든 수치는 독립 해석이며 공식 값이 아니다
mood: 친근한 한국 메신저·플랫폼. 밝은 앰버 노랑 포인트에 검정 텍스트, 둥근 말풍선과 리스트, 누구나 쉽게 읽는 대중적 명료함
best-for: 소비자용 메신저·커뮤니티·생활 플랫폼 앱, 넓은 연령층 대상 모바일 서비스
variants: [a, b]
status: complete
---

# 15 · Amber

## §1. 첫인상 요약

1. **노랑은 포인트, 배경은 하양이다.** 화면 대부분은 흰색·연회색이고, 앰버 노랑(`#FFE000`)은 CTA·내 말풍선·활성 표시 같은 "지금 중요한 것" 딱 한 곳에만 켜진다. 노랑이 화면을 도배하면 실패다.
2. **노랑 위엔 언제나 검정.** 노랑은 밝아서 흰 글씨가 안 보인다. 노랑 면 위 텍스트·아이콘은 항상 `near-black`(`#1A1A1C`). 노랑은 절대 텍스트/링크 색으로 쓰지 않는다.
3. **둥글고 친근하다.** 버튼·카드·입력은 radius 12px, 말풍선은 16px에 꼬리 코너만 4px로 각진 비대칭. 아바타는 원이 아니라 둥근 사각(radius 16px).
4. **누구나 읽는다.** 본문 16px, 대비 4.5:1 이상, 터치 44px 이상. 화려함보다 명료함 — 어르신도 처음 쓰는 사람도 헤매지 않는 대중 UI.
5. **아래에서 톡 올라온다.** 메시지·바텀시트·토스트는 하단에서 짧게 튕기며 등장(240~320ms). 즉각 반응하되 딱딱하지 않다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경 | `#FFFFFF` | `#17181B` |
| `--color-surface` | 카드·검색바·상대 말풍선·입력 채움 | `#F5F6F7` | `#212328` |
| `--color-surface-raised` | 바텀시트·모달·메뉴 배경 | `#FFFFFF` | `#2A2D33` |
| `--color-text` | 본문·이름·메시지 | `#17181A` | `#ECEEF1` |
| `--color-text-sub` | 보조 본문 (상태메시지·설명) | `#565B62` | `#A0A6AE` |
| `--color-text-tertiary` | 캡션·타임스탬프 (제약 有, §2.3) | `#71767E` | `#8A9098` |
| `--color-primary` | 앰버 노랑 — CTA 배경·내 말풍선·활성 표시 (면 전용) | `#FFE000` | `#FFE000` |
| `--color-primary-text` | 노랑 위 텍스트·아이콘 (항상 near-black) | `#1A1A1C` | `#1A1A1C` |
| `--color-primary-pressed` | 노랑 CTA press 상태 | `#F2CE00` | `#EBCF00` |
| `--color-primary-soft` | 연한 노랑 배경 (선택 칩·하이라이트·인용) | `#FFF6C4` | `#3A3410` |
| `--color-primary-soft-text` | soft 배경 위 텍스트 | `#1A1A1C` | `#FFDE4D` |
| `--color-primary-vivid` | 일러스트·아이콘 원 채움 (그래픽 전용, §2.3) | `#FFD400` | `#FFD400` |
| `--color-accent` | 텍스트로 쓰는 앰버 — 링크·강조 라벨 (딥 골드) | `#8A6A00` | `#FFD24D` |
| `--color-danger` | 삭제·에러·경고 | `#D92100` | `#FF6B57` |
| `--color-danger-soft` | 에러 배경 | `#FDECE8` | `#3A1E19` |
| `--color-success` | 완료·읽음·온라인 | `#157F52` | `#45C98A` |
| `--color-success-soft` | 완료 배경 | `#E4F4EB` | `#123024` |
| `--color-border` | 상대 말풍선 윤곽·입력 밑선·구분(최소) | `#E7E9EC` | `#33363C` |
| `--color-dim` | 모달·시트 뒤 딤 | `rgba(23,24,26,0.55)` | `rgba(0,0,0,0.6)` |
| `--color-frame-backdrop` | 데스크톱 앱 프레임 밖 배경 | `#ECEEF0` | `#000000` |

### 2.2 라이트/다크

양쪽 모두 지원한다(위 표). 핵심 원칙:

- **앰버 노랑(`--color-primary`)은 라이트/다크 동일 값(`#FFE000`)을 유지**한다. 노랑은 밝은 배경이든 어두운 배경이든 잘 보이고, 브랜드 인상을 고정한다. 노랑 위 텍스트도 라이트/다크 모두 `#1A1A1C`(near-black) 그대로 — 노랑이 밝으므로 다크 모드에서도 검정 글씨가 맞다.
- 다크 배경은 순검정(`#000`) 대신 `#17181B`(살짝 푸른 흑색), surface는 밝기만 두 단계 올린다(`#212328` → `#2A2D33`).
- **텍스트로 쓰는 앰버(`--color-accent`)만 모드별로 교체**한다: 라이트는 흰 배경 대비를 위해 딥 골드(`#8A6A00`), 다크는 어두운 배경 대비를 위해 밝은 앰버(`#FFD24D`). 노랑 원색은 어느 모드에서도 텍스트가 아니다(§2.3).
- danger/success는 다크에서 한 단계 밝은 톤(`#FF6B57`/`#45C98A`)으로 교체해 가독을 확보한다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.66px+/700+)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식(`L = 0.2126R'+0.7152G'+0.0722B'`, `c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **17.77:1** | **15.27:1** | ✓ 본문 |
| surface / text | **16.42:1** | **13.53:1** | ✓ 본문 |
| bg / text-sub | **6.84:1** | **7.24:1** | ✓ 본문 |
| surface / text-sub | **6.32:1** | **6.41:1** | ✓ 본문 |
| bg / text-tertiary | **4.57:1** | **5.51:1** | ✓ 본문 |
| surface / text-tertiary | **4.22:1** | **4.88:1** | 라이트 4.5 미달 → 아래 제약으로 통제 |
| primary / primary-text | **13.17:1** | **13.17:1** | ✓ 본문 (노랑 위 검정) |
| primary-pressed / primary-text | **11.26:1** | **11.14:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **15.91:1** | **9.42:1** | ✓ 본문 |
| accent(링크) / bg | **5.07:1** | **12.32:1** | ✓ 본문 |
| accent(링크) / surface | **4.69:1** | **10.91:1** | ✓ 본문 |
| danger / bg | **5.04:1** | **6.33:1** | ✓ 본문 |
| danger / surface | **4.66:1** | **5.61:1** | ✓ 본문 |
| success / bg | **5.01:1** | **8.43:1** | ✓ 본문 |
| success / surface | **4.63:1** | **7.47:1** | ✓ 본문 |
| primary-vivid / bg | **1.43:1** | **12.40:1** | 라이트 3:1 미달 → 아래 제약으로 통제 |
| primary(노랑) / bg (참고) | **1.36:1** | **11.71:1** | 라이트에서 텍스트·경계선 절대 금지 |

b 변형(오렌지, hue 35) 주요 쌍 실측: 라이트 primary(#FF9500)/near-black **7.90:1**, primary-soft(#FFEBD1)/soft-text(#7A3E00) **7.17:1**, accent(#A85A00)/bg **5.09:1**, accent/surface **4.70:1** — 다크 primary/near-black **7.90:1**, soft(#3A2510)/soft-text(#FFB454) **8.20:1**, accent(#FFB454)/bg **10.07:1**. 전부 통과. (b의 primary/흰텍스트 **2.20:1** = 흰 글씨 금지 재확인.)

추가 제약 (위 표에서 도출):
- **노랑 면 위 텍스트·아이콘은 항상 `--color-primary-text`(near-black).** 흰색·회색 텍스트 금지(노랑/흰 대비 1.36:1). 이것이 Amber의 제1 불변식이다(§10-A1).
- **`--color-primary`(노랑 원색)와 `--color-primary-vivid`는 라이트에서 텍스트·1px 경계선으로 절대 쓰지 않는다.** bg 대비 1.4:1 안팎. 노랑은 **면(fill)으로만** 존재하며, 그 위에는 반드시 near-black 콘텐츠가 얹힌다. 라이트에서 노랑 도형을 흰 배경에 단독으로 놓아 경계를 알려야 할 때는 near-black 1px 윤곽 또는 `--color-border`를 두른다.
- **앰버를 텍스트/링크 색으로 써야 하면 `--color-accent`를 쓴다**(라이트 딥골드 5.07:1, 다크 밝은앰버 12.32:1). 노랑 원색으로 링크를 만들면 위반.
- **`--color-text-tertiary`는 라이트 surface 위 본문 금지**(4.22:1). bg(흰색) 위에서만 본문 크기 허용, surface 위에서는 18px+/700 대형에만.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기(§2.4).

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/text/text-sub/text-tertiary/border/dim/frame-backdrop의 정확한 hex 값.
- danger(hue 5~15)·success(hue 148~158)의 의미와 값. 삭제·에러=danger, 완료·읽음=success 매핑.
- 토큰 구조: primary 6종 세트(primary/text/pressed/soft/soft-text/vivid) + accent를 반드시 전부 제공.
- **Amber 불변식: primary는 "밝은 따뜻한 점(bright warm point) + near-black 텍스트"여야 한다.** 즉 primary는 near-black(`#1A1A1C`)과 **7:1 이상**, 흰색(`#FFFFFF`)과는 **3:1 미만**이어야 한다(흰 글씨가 안 되는 밝기여야 정체성이 유지됨). 이 조건을 어기면 그건 Amber가 아니다.

**자유 (변형이 바꾸는 것):**
- primary hue는 **따뜻한 밝은 대역 35~65°**(오렌지~앰버~옐로)에서 자유. 이 대역 밖(예: 파랑·초록·보라)은 "밝고 검정 텍스트가 얹히는 점" 정체성을 깨므로 금지.
- accent는 primary와 **동일 hue**를 유지하되 라이트는 L 26~30%(딥 골드), 다크는 L 62~68%(밝은 앰버)로 파생.
- soft는 동일 hue에 라이트 S 100%/L 90~93%, 다크 S 55~65%/L 13~16%.
- 다크 primary는 라이트와 동일 값 유지 + near-black 텍스트(a 방식) 고정. 밝은 점 정체성상 다크에서도 노랑 원색 그대로가 맞다.

**랜덤 명명 `15-r<hue>`** (예: `15-r45` = hue 45 변형):
1. hue h를 35~65 범위에서 뽑는다 → `primary = hsl(h, 100%, 50%)`에서 시작.
2. near-black 대비 7:1 미달이면 L을 2%p씩 내려 **최초로 7:1을 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색). 동시에 흰색 대비가 3:1을 넘으면 그 hue는 폐기(밝은 점 정체성 위반).
3. pressed = primary에서 L −4%p, vivid = primary와 동일, soft = `hsl(h,100%,92%)`(라이트)·`hsl(h,60%,15%)`(다크), accent = `hsl(h,95%,28%)`(라이트)·`hsl(h,100%,65%)`(다크). accent가 §2.3 대비 미달이면 L을 2%p씩(라이트는 내리고 다크는 올려) 조정.
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `15-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만. 메신저 UI는 시스템 폰트가 정답):

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', system-ui,
               'Malgun Gothic', 'Noto Sans KR', 'Segoe UI', Roboto, sans-serif;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display-1 | 32px | 800 | 1.25 | -0.02em | 온보딩 헤드라인, 프로필 화면 대형 이름 |
| display-2 | 26px | 700 | 1.3 | -0.02em | 빈 상태 제목, 큰 강조 숫자 |
| title-1 | 22px | 700 | 1.35 | -0.01em | 화면 타이틀 (앱바 큰 제목) |
| title-2 | 18px | 700 | 1.4 | -0.01em | 섹션 헤더, 바텀시트 제목, 리스트 이름 강조 |
| body-1 | 16px | 400 | 1.5 | -0.005em | 메시지 본문·리스트 주 텍스트. 이름/버튼 라벨은 이 크기에 600/700 |
| body-2 | 14px | 400 | 1.55 | -0.005em | 보조 본문, 상태 메시지, 설명 |
| caption | 13px | 400 | 1.5 | 0 | 타임스탬프, 라벨, 날짜 구분 |
| micro | 12px | 600 | 1.45 | 0.01em | 탭바 라벨, 뱃지, 안읽음 카운트 (최소 크기, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 display 계열은 **1개만**, title-1도 1개만(앱바 큰 제목 겸용 가능). 헤딩 레벨은 화면당 최대 3단계.
- **이름·제목·버튼 라벨·강조 텍스트는 600/700**, 메시지·설명 본문은 400. 굵기로 위계를 만든다(색을 남발하지 않는다).
- 사용 weight는 **400/500/600/700/800의 5종만**. 900 금지. 400은 대비 4.5:1 이상 확보된 본문(16px+)에서만.
- 숫자(카운트·금액)는 `font-variant-numeric: tabular-nums` 권장, 안읽음 카운트는 micro/600.

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  20  24  32  40  48  64  (px)
```

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 16px (메신저는 조밀하게) |
| 섹션 간 간격 | 24px (큰 전환은 32px) |
| 카드 내부 패딩 | 16px |
| 리스트 아이템(채팅방·친구) 행 높이 | min-height 64px, 상하 패딩 12px |
| 리스트 아이콘/아바타 ↔ 텍스트 | 12px |
| 이름 ↔ 상태메시지 | 4px |
| 말풍선 상하 패딩 / 좌우 패딩 | 8px / 12px |
| 같은 사람 연속 메시지 간격 | 4px, 다른 사람으로 바뀌면 16px |
| 앱바 높이 | 56px |
| 하단 탭바 높이 | 56px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 52px, 좌우 16px, 아래 8px + `env(safe-area-inset-bottom)` |
| 채팅 입력 바 높이 | 최소 52px + safe-area |
| 터치 타깃 | 최소 44×44px (시각 크기가 작아도 히트 영역 확보) |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 채팅·리스트는 세로 스택이 기본.
- **데스크톱(768px+)에서는 중앙 400px 프레임**으로 표시: `max-width: 400px; margin: 0 auto;` 프레임은 radius 24px, `--shadow-3`, 프레임 밖 배경은 `--color-frame-backdrop`.
- 예외적 다열: 더보기 서비스 그리드는 **4열**(아이콘 버튼) 또는 혜택 카드 2열까지 허용. 텍스트 카드 3열 반복 금지(§10).

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-xs` | 4px | **말풍선 꼬리 코너 전용** (그 외 사용 금지) |
| `--radius-sm` | 8px | 작은 썸네일, 인풋 내부 요소 |
| `--radius-md` | 12px | 버튼, 입력 필드, 카드, 작은 아바타 |
| `--radius-lg` | 16px | 말풍선(꼬리 제외 3코너), 큰 카드, 아바타(둥근 사각), 시트 내부 요소 |
| `--radius-xl` | 20px | 검색바, 채팅 텍스트 입력, 바텀시트 상단 모서리 |
| `--radius-2xl` | 24px | 데스크톱 앱 프레임, 대형 모달 |
| `--radius-full` | 999px | 필 뱃지, 시스템 메시지, 안읽음 카운트, 토글, 필터 칩 |

- 인터랙티브 요소의 radius는 **최소 12px**. 직각 모서리 금지.
- **아바타는 원(999px)이 아니라 둥근 사각**(radius 16px, 48px 크기 기준). 이것이 Amber의 형태 서명이다. 프로필 대형 아바타(80px+)는 radius 24px.
- **말풍선은 비대칭**: 내 말풍선 `16px 16px 4px 16px`(우하단이 꼬리), 상대 말풍선 `16px 16px 16px 4px`(좌하단이 꼬리). 연속 메시지의 중간·끝 말풍선도 이 규칙 유지.
- **border는 최소한으로.** 면 분리는 surface 색 차이와 간격으로. 허용 예외 3가지:
  (1) 상대(흰색) 말풍선 윤곽 `1px solid var(--color-border)` — 흰 배경과 구분,
  (2) 입력 필드 밑선/윤곽 `1px solid var(--color-border)`(focus 시 `2px solid var(--color-text)`),
  (3) 섹션 구분선 화면당 최대 2개 `1px solid var(--color-border)`(설정 목록 그룹 사이).

**shadow/elevation 단계** (Kakao 계열답게 그림자 최소. 다크 값은 tokens.css에서 검정 기반 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드·말풍선은 그림자 없음 (색·윤곽으로 구분) |
| `--shadow-1` | `0 1px 3px rgba(20,20,20,0.08)` | `0 1px 3px rgba(0,0,0,0.4)` | sticky 앱바·탭바·입력 바 |
| `--shadow-2` | `0 4px 16px rgba(20,20,20,0.14)` | `0 4px 16px rgba(0,0,0,0.55)` | 바텀시트, 팝업 메뉴, 토스트, FAB |
| `--shadow-3` | `0 12px 40px rgba(20,20,20,0.20)` | `0 12px 40px rgba(0,0,0,0.65)` | 데스크톱 앱 프레임 |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 버튼·칩·아이콘 버튼은 `:active`에서 `transform: scale(0.97)`(120ms), 리스트 행은 bg 변화 + `scale(0.99)`. 떼면 240ms `--ease-spring` 복귀(§7).

### 6.1 버튼 (primary / secondary / ghost)

- **primary**: h 52px(하단 CTA)/44px(인라인), radius 12px, bg `--color-primary`(노랑), 라벨 16px/700 `--color-primary-text`(near-black). 하단 CTA는 가로 꽉 참, 인라인은 내용 폭 + 좌우 패딩 20px. **노랑 위 라벨은 무조건 검정** — 흰 라벨 금지(§10-A1).
- **secondary**: 동일 치수, bg `--color-surface`, 라벨 16px/700 `--color-text`, 윤곽 `1px solid var(--color-border)`.
- **ghost**: bg 투명, 라벨 15px→16px/600 `--color-text-sub`, h 44px. 취소·부가 액션 전용.
- 상태: hover(데스크톱만) `filter: brightness(0.97)`(노랑은 살짝 어둡게) / press bg `--color-primary-pressed` + `scale(0.97)` / disabled bg `--color-surface`, 라벨 `--color-text-tertiary` / focus-visible `outline: 2px solid var(--color-text); outline-offset: 2px`(노랑 아웃라인은 대비 부족이라 텍스트색 링).

```css
.btn-primary { height: 52px; width: 100%; border: 0; border-radius: var(--radius-md);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 16px; font-weight: 700;
  transition: transform var(--motion-quick) var(--ease-out-soft), background var(--motion-quick) linear; }
.btn-primary:active { transform: scale(0.97); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-surface); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드

- 일반 입력: h 52px, radius 12px, bg `--color-surface-raised`, 윤곽 `1px solid var(--color-border)` → focus 시 `2px solid var(--color-text)`(200ms). 값 16px/400, placeholder `--color-text-tertiary`. 라벨은 필드 위 caption(13px) `--color-text-sub`, 간격 4px.
- **채팅 입력 바**: 하단 고정, bg `--color-bg` + `--shadow-1`. 좌측 `+`(첨부) 아이콘 버튼 44px → 텍스트 입력(bg `--color-surface`, radius 20px, 패딩 10px 16px, 16px/400) → 우측 전송 버튼(내용 있을 때만 노랑 원 40px radius 12px, near-black 종이비행기 SVG). 시스템 키보드 사용.
- 검색: bg `--color-surface`, radius 20px, 좌측 20px 돋보기 SVG(offset 좌패딩 40px), 높이 44px, 15px→16px/400.
- 에러: 윤곽·헬퍼 텍스트(13px)를 `--color-danger`로, 좌우 4px 흔들림 2회 200ms.

### 6.3 카드

- bg `--color-surface`(흰 배경 위) 또는 `--color-surface-raised`(회색 배경 위), radius 12px(큰 카드 16px), 패딩 16px, 그림자 없음(`--shadow-0`).
- 카드 안에 카드 금지(중첩 1단까지). 카드 제목은 title-2 또는 caption(라벨성).
- **노랑 배경 카드 금지**(§10-A2) — 강조가 필요하면 `--color-primary-soft`(연노랑) 배경 + near-black 텍스트, 또는 좌측 4px 노랑 액센트 바.

### 6.4 리스트 아이템 (채팅방·친구·설정)

- min-height 64px, 상하 패딩 12px(좌우는 화면 패딩 16px). 구조: [아바타 48×48 둥근사각 radius 16px] –12px– [이름 16px/600 + 상태·미리보기 14px/400 `--color-text-sub`, 1줄 말줄임] – [우측 열: 타임스탬프 caption `--color-text-tertiary` + 안읽음 뱃지].
- **안읽음 뱃지**: 노랑이 아니라 `--color-danger` 원형(min 20px, radius full, 카운트 micro/600 흰색). 노랑은 대비상 카운트 배경으로 부적합.
- 온라인 표시: 아바타 우하단 10px 원 `--color-success` + bg색 2px 링.
- **행 사이 구분선 금지** — 간격과 아바타로 분리. press: 행 전체 bg `--color-surface`(라이트)/`--color-surface-raised`(다크) 120ms.

```css
.list-item { display: flex; align-items: center; gap: 12px; min-height: 64px; padding: 12px 0; }
.list-item .avatar { width: 48px; height: 48px; border-radius: var(--radius-lg); }
.list-item .badge-unread { margin-left: auto; min-width: 20px; height: 20px; border-radius: var(--radius-full);
  background: var(--color-danger); color: #fff; font-size: 12px; font-weight: 600; }
```

### 6.5 상단 네비/앱바

- h 56px, 좌 뒤로가기 또는 화면 제목(title-1/title-2), 우측 아이콘 액션 최대 2개(검색·추가), 각 히트 44×44px, 24px 인라인 SVG(stroke 1.8px).
- 배경 `--color-bg`. 스크롤 시작 시 `--shadow-1`. **햄버거 메뉴 금지**(§10-A8) — 내비게이션은 하단 탭바.
- 대화방 앱바: 좌 뒤로가기 + 상대 이름(title-2) + 우측 메뉴(더보기 점3개, 이건 화면 옵션이지 전역 드로어 아님).

### 6.6 하단 탭바 (모바일)

- h 56px + safe-area, 탭 4~5개. 각 탭: 24px 인라인 SVG 아이콘 + micro(12px/600) 라벨, 상하 패딩 8px, 히트 44px 이상.
- 활성 탭 `--color-text`(아이콘 fill 포함), 비활성 `--color-text-tertiary`. **활성 강조는 노랑이 아니라 굵기·검정 대비**로(노랑 아이콘은 흰 배경 대비 미달). 안읽음 있는 탭은 아이콘 우상단 `--color-danger` 점.
- bg `--color-bg` + 위쪽 그림자 `--shadow-1`. 상단 구분선 금지. 탭 전환 시 아이콘 `scale(0.9)→1` 스프링 240ms.

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**(중앙 모달은 파괴적 확인·짧은 알림 전용): 하단 부착, radius 20px 20px 0 0, bg `--color-surface-raised`, `--shadow-2`, 상단 그랩바 36×4px `--color-border` radius full(상단 중앙, 위 8px), 내부 패딩 16px, 제목 title-2.
- 진입 `translateY(100%)→0` 240ms `--ease-out-soft` + 딤(`--color-dim`) 페이드 180ms. CTA는 시트 안 하단 52px 버튼.
- 파괴적 확인 모달: 중앙, 폭 `calc(100% - 40px)`, radius 16px, 제목 title-2 + 본문 14px, 버튼 2개 세로 또는 가로(ghost + danger), 각 h 48px, gap 8px.
- **액션시트(길게눌러 메뉴)**: 하단 부착 리스트, 각 항목 h 52px, 파괴 항목은 `--color-danger` 텍스트.

### 6.8 토스트

- 하단 탭바/입력 바 위 8px, bg `--color-text`(라이트)/`--color-surface-raised`(다크), 텍스트 14px/500 `--color-bg`(라이트)/`--color-text`(다크), radius 12px, 패딩 12px 16px, `--shadow-2`.
- 진입 `translateY(12px)+opacity 0→1` 240ms `--ease-spring`, 2.5초 후 자동 소멸(180ms 페이드). 성공 토스트는 텍스트 앞 20px 체크 SVG `--color-success`.

### 6.9 뱃지 / 칩

- **안읽음 카운트 뱃지**: §6.4 참조 (danger 원형).
- 상태 뱃지: h 22px, 패딩 4px 8px, radius full, micro(12px/600). soft 배경 + 대응 텍스트만(`--color-primary-soft`+soft-text, `--color-success-soft`+success, `--color-danger-soft`+danger). 순색 노랑 배경 뱃지 금지.
- 필터 칩(친구 탭 카테고리 등): h 36px(히트 44px), 패딩 8px 16px, radius full, 기본 bg `--color-surface` 텍스트 15px→16px 아닌 14px/600 `--color-text-sub` → **선택 시 bg `--color-primary`(노랑) 텍스트 near-black**(노랑을 "지금 선택됨" 포인트로 쓰는 대표 자리). press `scale(0.97)`.

### 6.10 빈 상태 (empty state)

- 세로 중앙 정렬: 96×96 인라인 SVG 일러스트(2톤: `--color-surface` 면 + `--color-primary-vivid` 포인트, 노랑 도형엔 near-black 윤곽) → 16px → 제목 display-2(26px/700) 또는 title-1 → 8px → 설명 14px/400 `--color-text-sub` → 24px → primary 또는 secondary 버튼 h 44px.
- 카피는 §8 규칙: "아직 대화가 없어요" + 다음 행동 제안 1줄. 사과·경고 톤 금지.

### 6.11 채팅 말풍선 (Amber 시그니처 컴포넌트)

- **내 말풍선**: bg `--color-primary`(노랑), 텍스트 16px/400 `--color-primary-text`(near-black), radius `16px 16px 4px 16px`, 패딩 8px 12px, 우측 정렬, 최대폭 화면의 72%. 그림자 없음.
- **상대 말풍선**: bg `--color-surface-raised`(라이트 흰색), 텍스트 16px/400 `--color-text`, 윤곽 `1px solid var(--color-border)`, radius `16px 16px 16px 4px`, 패딩 8px 12px, 좌측 정렬. 상대 아바타(36px 둥근사각)는 연속 메시지 그룹의 첫 말풍선 옆에만.
- 타임스탬프·읽음: 말풍선 바깥 하단 모서리, caption `--color-text-tertiary`, 읽음 표시는 "1"(안읽음, `--color-accent`)/없음(읽음).
- 시스템 메시지(날짜·입장): 중앙, bg `--color-surface`, radius full, 패딩 4px 12px, caption `--color-text-sub`.
- 진입: 보내는 메시지는 `translateY(8px)+scale(0.98)→` 320ms `--ease-spring`, 받는 메시지는 `translateY(8px)+opacity` 240ms.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 친근 — 빠르게 반응하고 살짝 튕긴다. 메시지·시트는 아래에서 톡 올라온다."**

**토큰:**

```css
--motion-instant: 0ms;
--motion-quick: 120ms;    /* press 반응 */
--motion-fast: 180ms;     /* fade, 색 전환, 딤 */
--motion-base: 240ms;     /* 전환·시트·복귀·탭 */
--motion-emphasis: 320ms; /* 메시지 전송·진입 강조 */
--ease-out-soft: cubic-bezier(0.2, 0.6, 0.25, 1);  /* 진입·전환 기본 */
--ease-spring:   cubic-bezier(0.34, 1.4, 0.5, 1);  /* 튕김 복귀·메시지 (Jelly보다 절제된 오버슈트) */
--ease-in-out:   cubic-bezier(0.6, 0, 0.2, 1);     /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.97)`(리스트 행 0.99) 120ms `--ease-out-soft`, 떼면 240ms `--ease-spring` 복귀 |
| 진입(entrance) | `opacity 0→1` + `translateY(8px)→0`, 240ms `--ease-out-soft` |
| 리스트 스태거 | 항목당 32ms 지연, 최대 10개까지(이후 동시 표시) |
| 페이지 전환 | 나가는 화면 fade-out 180ms → 들어오는 화면 진입 패턴. 대화방 진입만 우→좌 슬라이드(iOS 관습) 240ms 허용 |
| 메시지 전송 | 내 말풍선 `translateY(8px)+scale(0.98)→1` 320ms `--ease-spring` |
| 바텀시트 | `translateY(100%)→0` 240ms `--ease-out-soft`, 딤 fade 180ms |
| 탭 전환 | 아이콘 `scale(0.9)→1` 240ms `--ease-spring` |
| 토스트 | `translateY(12px)+opacity` 240ms `--ease-spring`, 2.5초 후 180ms fade-out |

**`prefers-reduced-motion` 대응 필수:** transform 기반 애니메이션 전부 제거, opacity 150ms만 유지. 슬라이드·튕김 없이 즉시 정착.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 150ms !important;
    transition-property: opacity !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 고정.** "~하십시오"·"~바랍니다" 금지. 반말 금지. 대중적이고 쉬운 단어(넓은 연령층 — 어려운 한자어·영어 남발 금지).
- 문장은 짧고 명료(20자 내외), 사용자가 주어("내 프로필", "받은 메시지"). 시스템 주어("시스템이", "요청이") 금지.
- 이모지: **메신저 특성상 콘텐츠(메시지)에는 자유**지만, **UI 카피(버튼·라벨·에러)에는 화면당 최대 1개**, 성공·빈 상태에서만. 버튼·에러에는 금지.
- 친근하되 과하지 않게. 느낌표는 한 문장에 1개까지, 성공·환영에만.

| 상황 | Amber 카피 | 금지 예 |
|---|---|---|
| CTA (전송) | 보내기 | 전송, 제출 |
| CTA (확인) | 확인 | OK, 실행 |
| CTA (다음) | 다음 | 계속 진행 |
| 완료 | 보냈어요 | 전송이 완료되었습니다 |
| 에러 (전송 실패) | 메시지를 못 보냈어요. 다시 시도해 주세요 | 전송 실패 (code 500) |
| 에러 (네트워크) | 연결이 불안정해요. 잠시 후 다시 시도해 주세요 | 네트워크 오류 (E-1024) |
| 빈 상태 (채팅) | 아직 대화가 없어요. 친구에게 먼저 말 걸어볼까요? | 대화 목록이 존재하지 않습니다 |
| 빈 상태 (친구) | 아직 친구가 없어요 | 데이터가 없습니다 |
| 로딩 | 불러오는 중이에요… | 로딩 중입니다. 기다려 주십시오 |
| 확인 다이얼로그 | 이 대화방을 나갈까요? | 채팅방을 삭제하시겠습니까? |
| 성공 토스트 | 저장했어요 | 저장이 완료되었습니다 |
| 차단/삭제 확인 | 정말 삭제할까요? 되돌릴 수 없어요 | 이 작업은 취소할 수 없습니다 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "잘못된 입력입니다", 반복되는 "죄송합니다", 격식체 "~하시기 바랍니다", 느낌표 2개 이상.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 메신저 "톡담 Tokdam")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 16px, 데스크톱은 중앙 400px 프레임(§4).
하단 탭바(§6.6) 4탭: 채팅 / 친구 / 더보기 / 설정. screen-2(대화방)는 탭바 대신 하단 채팅 입력 바.

### screen-1 채팅 목록

- 목적: 안읽은 대화를 3초 안에 스캔. 밀도 있는 리스트.
- 위→아래: 앱바(좌 타이틀 "채팅" title-1, 우 검색·추가 아이콘 2개) → 검색바(§6.2, radius 20px) → 8px → **채팅방 리스트**(§6.4 반복: 48px 둥근사각 아바타 / 방이름 16px/600 + 마지막 메시지 14px sub 1줄 말줄임 / 우측 상단 타임스탬프 caption + 우측 하단 안읽음 danger 뱃지). 안읽음 있는 방은 이름 700, 없으면 600 → 탭바.
- 노랑 사용처: **없음**(리스트엔 노랑을 쓰지 않는다 — 포인트는 안읽음 danger 뱃지). 진입 시 리스트 스태거(32ms). 우하단 노랑 FAB(56px 원 radius full, near-black 새 채팅 SVG, `--shadow-2`) 1개 — 이 화면 유일한 노랑.

### screen-2 대화방 (말풍선)

- 목적: 대화에 집중. Amber 시그니처 화면.
- 위→아래: 앱바(뒤로가기 + 상대 이름 title-2 + 우측 더보기) → **메시지 영역**(스크롤, 배경 `--color-surface` 연회색 — 흰 말풍선이 떠 보이게): 날짜 시스템 메시지(중앙 pill) → 상대 말풍선(§6.11, 흰색+윤곽, 좌측, 아바타 36px) → 내 말풍선(§6.11, **노랑**, 우측, 타임스탬프·읽음 바깥 하단) 반복. 같은 사람 연속은 4px, 바뀌면 16px 간격 → 하단 **채팅 입력 바**(§6.2: + 첨부 / 입력 필드 radius 20px / 전송 노랑 원 버튼 — 내용 있을 때만 활성).
- 노랑 사용처: 내 말풍선, 전송 버튼. 메시지 전송 시 §7 메시지 전송 모션(아래에서 톡).

### screen-3 프로필

- 목적: 상대/내 프로필을 크게 보여주고 액션 제공.
- 위→아래: 상단 커버 영역(높이 200px, bg `--color-surface`, 하단에 걸친 **80px 둥근사각 아바타 radius 24px**) → 12px → 이름 display-2(26px/700) → 4px → 상태메시지 body-2 `--color-text-sub` → 24px → **액션 버튼 행**(3개 가로: "1:1 채팅"=primary 노랑, "통화"=secondary, "편집/친구추가"=secondary — 각 아이콘 24px + 라벨 micro, radius 12px, h 64px) → 32px → 정보 리스트(§6.4 변형: 생일·이메일 등 라벨 caption sub + 값 body-1) → (내 프로필이면) 하단 "프로필 편집" ghost.
- 노랑 사용처: 대표 액션 버튼 1개("1:1 채팅"). 나머지는 secondary.

### screen-4 더보기 (서비스 그리드)

- 목적: 플랫폼의 여러 서비스로 가는 허브. 아이콘 그리드.
- 위→아래: 앱바(타이틀 "더보기") → 16px → 내 프로필 요약 카드(§6.3: 48px 아바타 + 이름 title-2 + "프로필 보기" caption accent, press 가능) → 24px → **서비스 그리드 4열**(각 셀: 56px 둥근사각 아이콘 타일 radius 16px bg `--color-surface` + 24px SVG + 라벨 micro 아래, gap 16px, 행 간 20px — 예: 쇼핑/페이/선물하기/이모티콘/캘린더/게임…) → 24px → 추천 배너 카드(가로 full, bg `--color-primary-soft` 연노랑 + near-black 텍스트 + 우측 일러스트, radius 16px, 패딩 16px) → 탭바.
- 노랑 사용처: 배너의 연노랑 soft 배경 1곳(순색 아님). 그리드 아이콘 타일은 뉴트럴, 강조 필요한 아이콘 1~2개만 vivid 노랑 채움(near-black 윤곽).

### screen-5 설정

- 목적: 조용한 설정 서랍. 그룹된 리스트.
- 위→아래: 앱바(타이틀 "설정") → 16px → 설정 그룹 반복: 그룹 헤더 caption `--color-text-sub`("계정") → 리스트(§6.4 변형: 좌 24px SVG 아이콘 + 라벨 body-1 + 우 셰브론 또는 토글 51×31px radius full — ON 시 트랙 `--color-primary` 노랑, 노브 흰색) → 그룹 사이 `--color-border` 1px 구분선(화면 예외, §5) → 다음 그룹("알림", "화면": 다크모드 토글 포함) → 32px → "로그아웃" ghost `--color-danger` 텍스트 → 앱 버전 caption tertiary 중앙 → 탭바.
- 노랑 사용처: 켜진 토글 트랙(ON 상태 = 노랑 포인트). 그 외 뉴트럴.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Amber에 그라데이션은 없다. 단색 노랑/뉴트럴/soft 톤만.
2. 모든 카드에 동일 그림자 → 카드·말풍선은 `--shadow-0`. 그림자는 떠 있는 것(시트·토스트·FAB·sticky 바)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 텍스트 카드 3열 금지. 서비스 그리드(4열 아이콘)나 혜택 2열만.
4. `border: 1px solid #eee` 남발 → border 허용 예외 3곳(§5) 외 금지.
5. 이모지를 UI 아이콘 대신 사용 → UI 아이콘은 24px 인라인 SVG(stroke 1.8px)만. 이모지는 §8 규칙(메시지 콘텐츠엔 자유, UI 카피는 성공·빈 상태 1개).
6. 화면마다 다른 radius → §5 스케일 값만. 같은 컴포넌트는 항상 같은 radius.

**Amber 고유 금지** (A1~A8):
1. **A1 노랑 위 흰/회색 텍스트 금지** → 노랑 대비 흰색 1.36:1. 노랑 면 위 텍스트·아이콘은 **무조건 near-black(`--color-primary-text`)**. 이것이 제1 불변식.
2. **A2 노랑 대면적 도배 금지** → 노랑은 화면 배경·카드 배경·섹션 배경으로 쓰지 않는다. 노랑은 CTA 버튼·내 말풍선·선택 칩·활성 토글·FAB 같은 **작은 포인트 면**에만. 강조 배경이 필요하면 `--color-primary-soft`(연노랑).
3. **A3 노랑을 텍스트·링크·1px 선 색으로 금지** → 흰 배경 대비 미달. 앰버 색 텍스트/링크는 `--color-accent`(라이트 딥골드/다크 밝은앰버).
4. **A4 말풍선 대칭 라운드 금지** → 말풍선은 꼬리 코너 하나만 4px로 각진 비대칭(내 것 우하단, 상대 좌하단). 네 모서리 균일 라운드는 Amber 아님.
5. **A5 아바타 완전 원(999px) 금지** → 아바타는 둥근 사각(radius 16px, 대형 24px). 이게 형태 서명.
6. **A6 격식체·시스템 말투 금지** → "~하십시오", "처리되었습니다", 에러 코드 노출 금지. §8 표의 해요체 패턴만.
7. **A7 회색 1px 구분선으로 리스트 나누기 금지** → 채팅방·친구 리스트 행 사이 선 0개. 아바타 + 간격으로 분리. 구분선은 설정 그룹 사이 등 화면당 최대 2개(§5 예외).
8. **A8 상단 햄버거 메뉴·전역 드로어 금지** → 내비게이션은 하단 탭바 + 화면 안 리스트로만. 상단 아이콘은 화면별 액션(검색·추가)에 한함.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/15-amber/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-text: var(--color-primary-text);
  --color-primary-soft: var(--color-primary-soft);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --font-sans: var(--font-family);
  --ease-spring: var(--ease-spring);
  --ease-out-soft: var(--ease-out-soft);
}
```

```tsx
// 노랑 CTA — 라벨은 반드시 near-black (h-13 = 52px, rounded-xl = 12px 매핑 확인)
export function CtaButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-[52px] w-full rounded-[12px] bg-primary text-[16px] font-bold text-primary-text
                 transition-transform duration-[120ms] ease-out-soft active:scale-[0.97]
                 disabled:bg-surface disabled:text-text-tertiary"
      {...props}
    />
  );
}

// 채팅 말풍선 — 내 말풍선(노랑)/상대 말풍선(흰+윤곽), 비대칭 radius
export function Bubble({ mine, children }: { mine: boolean; children: React.ReactNode }) {
  return (
    <div
      className={
        mine
          ? "ml-auto max-w-[72%] rounded-[16px_16px_4px_16px] bg-primary px-3 py-2 text-[16px] text-primary-text"
          : "mr-auto max-w-[72%] rounded-[16px_16px_16px_4px] border border-border bg-surface-raised px-3 py-2 text-[16px] text-text"
      }
    >
      {children}
    </div>
  );
}

// 채팅방 리스트 아이템 — 둥근사각 아바타 + 안읽음 danger 뱃지
export function ChatRow({ avatar, name, preview, time, unread }: ChatRowProps) {
  return (
    <div className="flex min-h-16 items-center gap-3 py-3 transition-transform active:scale-[0.99]">
      <img src={avatar} className="size-12 rounded-[16px] object-cover" alt="" />
      <div className="min-w-0">
        <p className={`truncate text-[16px] ${unread ? "font-bold" : "font-semibold"} text-text`}>{name}</p>
        <p className="truncate text-[14px] text-text-sub">{preview}</p>
      </div>
      <div className="ml-auto flex flex-col items-end gap-1">
        <span className="text-[13px] text-text-tertiary">{time}</span>
        {unread > 0 && (
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-danger px-1 text-[12px] font-semibold text-white">
            {unread}
          </span>
        )}
      </div>
    </div>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap"(즉각) + "Spring"(살짝 튕김) 혼합에 대응(press = scale + 절제된 스프링). `--font-size-*` 8단계는 StyleSeed type scale의 display/title/body/caption 슬롯에 순서대로 매핑한다. 노랑=포인트, near-black-on-yellow 규칙은 StyleSeed의 on-primary 토큰 제약으로 넘긴다.

## §12. 채점 루브릭

합격선: **verifiable 10항목 전부 통과(70점 만점 중 70점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 70점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, accent/danger/success 텍스트 쌍 4.5:1 이상 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 8 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 출력 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 8 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|13\|14\|16\|18\|22\|26\|32)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 (4px는 말풍선 꼬리 전용) | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|8\|12\|16\|20\|24\|999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄 |
| V8 | press 물성: scale(0.97)과 스프링 easing 존재 | 8 | `grep -rF 'scale(0.97)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'var\(--ease-spring\)\|cubic-bezier\(0\.34, 1\.4, 0\.5, 1\)' $F \| wc -l` ≥ 1 |
| V9 | 노랑 위 흰 텍스트 없음 (A1) + 아바타 원형 없음 (A5) | 6 | primary 노랑(`--color-primary`/`#FFE000`/`#FF9500`) 배경 요소에 `color:#fff`/`color:#ffffff`/`var(--color-bg)` 조합 0건(수동/grep 병행). **그리고** 아바타 클래스에 `border-radius: 999px`/`--radius-full`/`50%` 0건 → 위반 0 |
| V10 | 비대칭 말풍선 + tabular 카운트 | 5 | 말풍선에 4코너 균일 radius 아닌 비대칭 값(`16px 16px 4px 16px` 또는 `16px 16px 16px 4px`) 존재 `grep -rE '16px 16px (4px 16px\|16px 4px)' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (노랑=포인트·검정 텍스트·둥근 친근함) | 노랑이 배경으로 넓게 깔렸거나 노랑 위 흰 글씨가 있다 | 노랑은 포인트지만 아바타가 원이거나 radius가 일부만 12px+ | 노랑은 CTA·말풍선 등 포인트에만, 위엔 검정, 아바타는 둥근사각, radius 일관 |
| S2 | §8 어조 준수 | "처리되었습니다"류 격식체·에러 코드 노출 | 해요체지만 문장이 길거나 시스템 주어 혼재 | 전 카피 해요체 한 호흡, 쉬운 단어, 에러가 [상황+다음 행동], CTA 동사형("보내기") |
| S3 | 모션 물성 (§7) | 모션 없음 또는 linear만 | press는 있으나 튕김·메시지 진입 성격이 약함 | 누르면 눌리고 살짝 튕겨 돌아오며, 메시지·시트가 아래에서 톡 올라온다 |
| S4 | 밀도·리듬 (§4 메신저 밀도) | 리스트가 구분선으로 나뉘거나 간격이 뒤죽박죽 | 간격은 스케일 값이나 섹션 리듬(24px)이 불규칙 | 선 없이 아바타+간격으로 행이 읽히고, 조밀하되 답답하지 않다 |
| S5 | §10 정성 항목 (노랑 면적·그라데이션·드로어) | 그라데이션 또는 노랑 대면적 도배 또는 햄버거 드로어 | 금지 위반은 없으나 노랑 포인트가 과하거나 산만 | 그라데이션 0, 노랑은 소수 포인트 면에만, 내비는 하단 탭바, 뉴트럴이 지배적 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
