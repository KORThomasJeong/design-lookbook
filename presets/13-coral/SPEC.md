---
number: 13
codename: Coral
inspired-by: Airbnb DLS ("Cereal") — 서술 참조만, 상표는 파일/클래스명에 쓰지 않음. 이 문서의 모든 수치는 독립 해석이며 어떤 공식 값도 아니다
mood: 따뜻한 여행/숙박 마켓플레이스. 사진이 주인공, 코랄-레드 포인트 하나, 넉넉한 여백, 둥근 모서리, 사람 냄새 나는 카피
best-for: 소비자향 마켓플레이스, 여행·숙박·예약, 사진 중심 커머스, 로컬 서비스 탐색
variants: [a, b]
status: complete
---

# 13 · Coral

## §1. 첫인상 요약

1. **사진이 주인공이다.** 화면의 시선을 끄는 것은 항상 큰 이미지(카드 상단 full-bleed, radius 12px)이고, 텍스트·색은 사진을 보조한다. 그래픽 UI가 사진보다 튀면 실패다.
2. **포인트 색은 딱 하나.** 코랄-레드(`--color-primary`)는 화면당 primary CTA·핵심 링크에만. 나머지는 뉴트럴(따뜻한 회색)과 잉크 텍스트. 컬러 남발 금지.
3. **넉넉하고 조용한 여백.** 화면 좌우 24px, 섹션 간 32px. 구분선 대신 여백과 헤어라인(#DDDDDD) 하나로 나눈다. 성기고 편안하게 보여야 정상이다.
4. **둥글고 부드럽다.** 버튼 8px, 사진 12px, 카드 16px, 검색바·칩은 완전한 필(full). 직각 모서리 금지. 그림자는 눌러 담지 않고 hover에서만 살짝 뜬다.
5. **옆자리 친구 말투.** "어디로 떠나세요?", "예약이 확정됐어요" — 해요체, 따뜻하고 짧게, 사용자를 주어로. 격식·시스템 말투 금지.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경 | `#FFFFFF` | `#1A1617` |
| `--color-surface` | 섹션·검색바·칩 배경 (따뜻한 오프화이트) | `#F7F5F3` | `#242021` |
| `--color-surface-raised` | 카드·바텀시트·모달 배경 | `#FFFFFF` | `#2E2A2B` |
| `--color-text` | 본문·제목·별점 잉크 | `#222222` | `#F3EEEC` |
| `--color-text-sub` | 보조 본문 (위치·설명) | `#585858` | `#B2ABA8` |
| `--color-text-tertiary` | 캡션·메타·타임스탬프 (제약 有, §2.3) | `#6A6A6A` | `#948C89` |
| `--color-primary` | CTA 배경·핵심 액션·링크 텍스트 | `#D02730` | `#D02730` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#FFFFFF` |
| `--color-primary-pressed` | CTA press 상태 | `#AE1F27` | `#AE1F27` |
| `--color-primary-soft` | 연한 코랄 배경 (선택 칩·안내 박스·찜 하이라이트) | `#FFF0EF` | `#2E1C1D` |
| `--color-primary-soft-text` | soft 위 텍스트, 다크의 코랄 텍스트 | `#BD1D27` | `#FF8A8E` |
| `--color-primary-vivid` | 시그니처 밝은 코랄 — 하트·프로모 아이콘·그래픽 (그래픽 전용) | `#FF5A5F` | `#FF6B70` |
| `--color-accent` | 보색 틸 — 슈퍼호스트 뱃지·차트 2계열·일러스트 (그래픽 전용) | `#00857A` | `#3AD4C4` |
| `--color-danger` | 취소·삭제·에러·마감 임박 | `#C13515` | `#F0673E` |
| `--color-danger-soft` | 에러 배경 | `#FDECE7` | `#3A1E16` |
| `--color-success` | 예약 확정·결제 완료 | `#17742E` | `#3DD07A` |
| `--color-success-soft` | 완료 배경 | `#E7F4EB` | `#14301F` |
| `--color-border` | 헤어라인 (유일하게 허용되는 선) | `#DDDDDD` | `#3A3536` |
| `--color-border-soft` | 더 옅은 구분 | `#EBEBEB` | `#302B2C` |
| `--color-dim` | 모달 뒤 스크림 | `rgba(34,34,34,0.48)` | `rgba(0,0,0,0.6)` |
| `--color-star` | 별점 채움 | `#222222` | `#F3EEEC` |

> primary·pressed는 라이트/다크 동일 값을 유지해 브랜드 코랄 인상을 고정한다(§2.2).

### 2.2 라이트/다크

라이트가 기본이자 주력이다(소비자 마켓플레이스 관습). 다크도 완전 지원한다(위 표).
다크는 순검정(#000) 대신 **따뜻한 잉크 블랙 `#1A1617`**(살짝 붉은기 도는 흑색)을 쓰고,
surface는 밝기만 올린다(`#242021` → `#2E2A2B`). primary(코랄 CTA)는 라이트와 **동일 값 유지**해
브랜드 인상을 고정하고(다크 bg 대비 3.43:1로 충분히 부상), 텍스트로 쓰는 코랄만
`--color-primary-soft-text`(#FF8A8E)로 밝힌다. danger/success/accent는 다크에서 한 단계 밝은 톤으로
교체해 어두운 배경 위 가독을 확보한다. 사진 위 오버레이 텍스트는 §6.5 규칙(스크림)을 따른다.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(24px+ 또는 18.7px+/700+)·UI 그래픽 3:1 이상.**
아래 값은 WCAG 2.x 상대휘도 공식(`L = 0.2126R'+0.7152G'+0.0722B'`, `CR=(L1+0.05)/(L2+0.05)`)으로 계산한 실제 대비율이다.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **15.91:1** | **15.59:1** | ✓ 본문 |
| surface / text | **14.63:1** | **14.00:1** | ✓ 본문 |
| bg / text-sub | **7.11:1** | **7.93:1** | ✓ 본문 |
| surface / text-sub | **6.54:1** | **7.12:1** | ✓ 본문 |
| bg / text-tertiary | **5.41:1** | **5.44:1** | ✓ 본문 |
| surface / text-tertiary | **4.97:1** | **4.89:1** | ✓ 본문 |
| primary / primary-text | **5.23:1** | **5.23:1** | ✓ 본문 |
| primary(텍스트로) / bg | **5.23:1** | soft-text 기준 **7.92:1** | ✓ 본문 |
| primary(텍스트로) / surface | **4.81:1** | — (다크는 soft-text 사용) | ✓ 본문 |
| primary-pressed / primary-text | **6.94:1** | **6.94:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **5.63:1** | **7.14:1** | ✓ 본문 |
| primary-vivid / bg | **3.05:1** | **6.48:1** | ✓ 그래픽(3:1) — 본문 텍스트 금지 |
| accent / bg | **4.53:1** | **9.73:1** | ✓ 그래픽. 라이트는 대형/UI 텍스트도 가능(3:1↑) |
| accent / surface | **4.17:1** | — | ✓ 그래픽(3:1) |
| danger / bg | **5.54:1** | **5.73:1** | ✓ 본문 |
| danger / surface | **5.10:1** | **5.15:1** | ✓ 본문 |
| danger-soft / danger | **4.84:1** | **4.88:1** | ✓ 본문 |
| success / bg | **5.88:1** | **8.97:1** | ✓ 본문 |
| success / surface | **5.40:1** | **8.06:1** | ✓ 본문 |
| success-soft / success | **5.19:1** | **7.13:1** | ✓ 본문 |

b 변형(teal) 주요 쌍 실측: 라이트 primary(#007A6E)/흰 텍스트 **5.24:1**, primary/surface **4.87:1**,
soft(#E1F4F0)/soft-text(#006357) **6.30:1**, vivid(#00A699)/bg **3.04:1**(그래픽), accent(#FF5A5F)/bg **3.05:1**(그래픽) —
다크 primary(#2CC4B0)/primary-text(#062521) **7.44:1**, soft(#122C28)/soft-text(#3ED6C2) **8.19:1**, accent(#FF6B70)/bg **6.48:1**. 전부 통과.

추가 제약 (위 표에서 도출):
- **primary 위 텍스트는 항상 `--color-primary-text`(#FFFFFF).** 임의 색 금지.
- **`--color-text-tertiary`는 surface 위에서 라이트 4.97:1 / 다크 4.89:1**로 본문 통과하나, 4.5에 여유가 적으므로 12px 미만 텍스트에는 쓰지 않는다.
- **`--color-primary-vivid`는 그래픽 전용**(하트·아이콘·일러스트·차트). 라이트 bg 대비 3.05:1이라 어떤 텍스트에도 쓰면 위반.
- **`--color-accent`(라이트 #00857A, bg 4.53:1)는 그래픽 + 대형/UI 텍스트(18.7px+/700 또는 아이콘)까지만.** 16px 이하 본문 텍스트 금지. 다크 accent는 밝아 자유.
- 다크에서 코랄 텍스트는 `--color-primary`(#D02730, 다크 bg 대비 3.43:1로 본문 불가)가 아니라 `--color-primary-soft-text`(#FF8A8E)를 쓴다.
- **사진 위 텍스트**는 §6.5 스크림(하단 그라데이션 `rgba(0,0,0,0)`→`rgba(0,0,0,0.55)`) 위에서 `#FFFFFF`만. 스크림 없는 사진 위 텍스트 금지.
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/text/text-sub/text-tertiary/border/border-soft/dim/star의 정확한 hex 값. (따뜻한 회색 계열 — 순회색 #F5F5F5가 아니라 붉은기 살짝 있는 #F7F5F3 고정.)
- danger(hue 8~16, 번트 오렌지-레드)·success(hue 130~150, 그린)의 의미와 값. 취소/에러=danger, 완료/확정=success 매핑.
- 토큰 구조: primary 6종 세트(primary/text/pressed/soft/soft-text/vivid) + accent를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 55~100%, L 40~52%**(흰 텍스트 4.5:1 확보 구간),
  soft는 동일 hue에 **S 40~100%, L 96~98%**(라이트) / **S 25~45%, L 12~16%**(다크).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 **danger(11°)·success(137°)와 ±12° 이내로 겹치는 hue는 폐기하고 다시 뽑는다**(시맨틱 색 혼동 방지). (a 변형 코랄 356°는 danger 11°와 15° 떨어져 통과. b 변형 틸 174°도 통과.)
- **accent는 primary의 보색: primary hue + 180° ±20° 이내.** 이 코랄↔틸 짝(a) 또는 틸↔코랄 짝(b)이 Coral의 시그니처. accent는 그래픽 전용이므로 3:1만 넘기면 된다.
- 다크 primary는 (1) 라이트 값 유지 + 흰 텍스트(a 방식) 또는 (2) L 60~72%로 밝힌 뒤 primary-text를 같은 hue의 L 8~14% 짙은 색으로 교체(b 방식) 중 택1.

**랜덤 명명 `13-r<hue>`** (예: `13-r276` = hue 276 변형):
1. hue h를 뽑는다. danger/success ±12° 구간이면 폐기하고 다시 뽑는다 → `primary = hsl(h, 72%, 45%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 미달이면 L을 2%p씩 내려 **최초로 통과하는 값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −8%p, vivid는 primary hue에 S 100%/L 67%, soft는 동일 h에 S 90%/L 97%(라이트)·S 35%/L 14%(다크), soft-text는 pressed와 동일, accent는 `hsl(h+180, 60%, 42%)`(라이트)에서 3:1 미달 시 L −3%p씩.
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `13-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만. Cereal은 상표라 이름만 우선 지정하고 시스템 지오메트릭/휴머니스트 산세리프로 폴백):

```css
--font-family: 'Airbnb Cereal VF', 'Airbnb Cereal', Circular, -apple-system,
               BlinkMacSystemFont, system-ui, 'Segoe UI', 'Helvetica Neue',
               'Pretendard Variable', Pretendard, 'Apple SD Gothic Neo', sans-serif;
```

**타입 스케일** — 이 8단계 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 32px | 600 | 1.15 | -0.02em | 확인 화면 큰 제목, 히어로 카피 |
| title-1 | 26px | 600 | 1.2 | -0.01em | 화면 타이틀("어디로 떠나세요?") |
| title-2 | 22px | 600 | 1.25 | -0.01em | 섹션 헤더, 숙소 상세명 |
| title-3 | 18px | 600 | 1.3 | 0 | 카드 제목, 리스트 헤더, 가격 강조 |
| body-1 | 16px | 400 | 1.5 | 0 | 본문, 리스트 주 텍스트. 버튼 라벨은 이 크기에 500 |
| body-2 | 15px | 400 | 1.47 | 0 | 보조 본문, 설명, 리뷰 |
| caption | 13px | 500 | 1.4 | 0 | 라벨, 별점 옆 메타, 날짜 |
| micro | 12px | 600 | 1.3 | 0.01em | 뱃지, 탭바 라벨 (최소 크기, 이보다 작게 금지) |

**위계 규칙:**
- 한 화면에 display 또는 title-1은 **합쳐서 1개만**(대개 화면 최상단 질문/제목). title-2는 섹션마다 허용하되 화면당 최대 4개. 헤딩 레벨은 화면당 최대 3단계.
- **weight는 400/500/600/700의 4종만.** Coral의 위계는 크기와 weight 500↔600 대비로 만든다. 800/900 금지(과한 굵기는 Coral의 절제와 충돌).
- **가격·숫자는 title-3(18px/600) 이상 + `font-variant-numeric: tabular-nums`.** "1박 ₩128,000"에서 금액은 600, "1박"·"₩"은 400으로 무게 분리. 금액은 튀되 fintech처럼 800으로 과장하지 않는다.
- **별점**은 caption(13px/500) + 별 아이콘 12px `--color-star`. "★ 4.92 · 후기 128" 형식. 별점 숫자를 색으로 강조하지 않는다(잉크색 유지).
- 본문 기본은 body-1(16px/**400**) — 400을 본문에 적극 쓴다(한글도 16px 이상이면 400 가독 확보). 12~13px 캡션만 500/600으로 올린다.

**금지:** 임의 font-size 사용 금지 — 위 스케일 8값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
4  8  12  16  24  32  40  48  64  (px)   /* 16→24 점프: 20 없음. Coral 고유 리듬 */
```

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 | 24px |
| 섹션 간 간격 | 32px (큰 전환·페이지 블록 48px) |
| 사진 카드 하단 콘텐츠 패딩 | 16px |
| 글 위주 카드·상세 블록 패딩 | 24px |
| 리스트 아이템 상하 패딩 | 16px (행 min-height 56px) |
| 아이콘↔텍스트 | 12px, 제목↔본문 8px, 본문↔메타 4px |
| 카드 그리드 세로 간격 | 24px (카드 사이) |
| 앱바 높이 | 64px |
| 하단 탭바 높이 | 64px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA 바 | 버튼 높이 52px, 좌우 24px, 상하 12px + `env(safe-area-inset-bottom)`, 상단 헤어라인 1px |
| 터치 타깃 | 최소 44×44px |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼. 탐색 화면의 숙소 카드는 **1열 full-width(모바일)** — 사진을 크게 보여준다.
- **데스크톱(768px+)에서는 중앙 428px 프레임**으로 표시: `max-width: 428px; margin: 0 auto;` 프레임 radius 24px, `--shadow-3`, 프레임 밖 배경 `--color-frame-backdrop`(라이트 #EBE7E3 / 다크 #0E0B0C).
- 실제 데스크톱 앱(프레임 아님)으로 확장 시: 카드 그리드 gap 24px, 2열(768px+)·3열(1128px+)·4열(1440px+). **3열 아이콘+제목+설명 반복 카드 금지**(§10) — 여기서 말하는 그리드는 사진 숙소 카드에 한한다.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-xs` | 4px | 인라인 태그, 아주 작은 뱃지 |
| `--radius-sm` | 8px | 버튼, 입력 필드, 작은 컨트롤 |
| `--radius-md` | 12px | 사진·썸네일, 사각 칩 |
| `--radius-lg` | 16px | 카드, 토스트, 안내 박스 |
| `--radius-xl` | 24px | 큰 카드, 모달, 바텀시트 상단, 데스크톱 프레임 |
| `--radius-full` | 9999px | 필 검색바, 필터 칩, 아바타, 토글, 아이콘 원 |

- 인터랙티브 요소의 radius는 **최소 8px**. 직각(0)·2~4px 날카로운 모서리 금지(태그 4px는 예외).
- **사진은 radius 12px 클리핑**으로 카드감을 낸다(그림자 대신). 카드 안 사진이 카드 상단 full-bleed면 사진 상단만 카드 radius(16px)를 따르고 하단은 직선.
- **border는 원칙적으로 헤어라인 1종만.** 면 분리는 surface 색 차이·여백·헤어라인으로. 허용:
  (1) 입력 필드 테두리 `1px solid var(--color-border)`(focus 시 `2px solid var(--color-text)` 또는 primary),
  (2) 섹션 구분선 `1px solid var(--color-border-soft)`(스크롤 리스트 그룹 사이),
  (3) 필 검색바 테두리 `1px solid var(--color-border)` + `--shadow-2`.

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반으로 오버라이드):

| 토큰 | 라이트 값 | 용도 |
|---|---|---|
| `--shadow-0` | `none` | 기본. 리스트 카드는 그림자 없음 — 사진 radius·여백·헤어라인으로 분리 |
| `--shadow-1` | `0 1px 2px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)` | sticky 앱바·하단 CTA 바 |
| `--shadow-2` | `0 0 0 1px rgba(0,0,0,0.02), 0 2px 6px rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.10)` | 카드 hover 리프트, 플로팅 검색바, 팝오버 (시그니처 3층) |
| `--shadow-3` | `0 0 0 1px rgba(0,0,0,0.05), 0 6px 16px rgba(0,0,0,0.12), 0 12px 28px rgba(0,0,0,0.12)` | 모달, 바텀시트, 데스크톱 프레임 |

- **핵심: 리스트/그리드 카드는 항상 `--shadow-0`.** shadow-2는 **hover(데스크톱)에서만** 카드에 붙는다. 모든 카드에 상시 그림자 = 위반(§10).

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 모든 인터랙티브 요소는 `:active`에서 `transform: scale(0.96)`(150ms `--ease-standard`), 오버슈트 없이 정착. 스프링/바운스 금지(Jelly와의 차별점).

### 6.1 버튼 (primary / secondary / ghost)

- **primary**: h 52px(하단 CTA)/48px(인라인), radius 8px, bg `--color-primary`, 라벨 16px/500 `--color-primary-text`. 하단 CTA는 가로 꽉 참, 인라인은 내용 폭 + 좌우 패딩 24px.
- **secondary**: 동일 치수, bg `--color-surface-raised`, 라벨 16px/600 `--color-text`, 테두리 `1px solid var(--color-text)`(잉크 아웃라인). 취소·부가 액션.
- **ghost / link**: bg 투명, 라벨 16px/500 밑줄, 색 `--color-primary`(라이트)/`--color-primary-soft-text`(다크), h 44px. 텍스트 링크 액션 전용.
- 상태: hover(데스크톱) `filter: brightness(1.06)` / press bg `--color-primary-pressed` + `scale(0.96)` / disabled bg `--color-border-soft`, 라벨 `--color-text-tertiary` / focus-visible `outline: 2px solid var(--color-text); outline-offset: 2px`.

```css
.btn-primary { height: 52px; border: 0; border-radius: var(--radius-sm);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 16px; font-weight: 500;
  transition: transform var(--motion-fast) var(--ease-standard),
              background var(--motion-fast) var(--ease-standard); }
.btn-primary:active { transform: scale(0.96); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-border-soft); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드

- h 52px, radius 8px, 테두리 `1px solid var(--color-border)`, 패딩 좌우 16px, 값 16px/400, 플레이스홀더 `--color-text-tertiary`. focus 시 테두리 `2px solid var(--color-text)`(잉크 강조, 150ms). 라벨은 필드 위 caption(13px/500) `--color-text-sub`, 간격 8px.
- **검색바(특수)**: 필 형태(radius full), h 56px, bg `--color-surface-raised`, 테두리 `1px solid var(--color-border)` + `--shadow-2`, 좌측 검색 아이콘 20px, 텍스트 "어디로 떠나세요?" `--color-text-tertiary`. 탭하면 확장 검색 화면/바텀시트로.
- 에러: 테두리·헬퍼 텍스트(13px)를 `--color-danger`로, 헬퍼는 §8 카피. 흔들림 애니메이션 금지(Coral은 조용함) — 색 전환 150ms만.

### 6.3 카드 (숙소 카드가 대표)

- **사진 카드**: 최상단 사진(aspect 20:19 또는 1:1, radius 12px, 하단 콘텐츠와 8px 간격), 그림자 `--shadow-0`. 사진 우상단에 찜 하트 버튼(44×44 히트, 아이콘 24px, 미찜 흰색 stroke + 스크림, 찜 시 `--color-primary-vivid` fill). 사진 아래: 1행 제목 title-3(18px/600) + 우측 별점 caption("★ 4.92"), 2행 위치 body-2 `--color-text-sub`, 3행 날짜 body-2 `--color-text-tertiary`, 4행 가격 title-3("₩128,000" 600 + "/박" 400). 행간 4px.
- bg는 `--color-bg`(카드 배경 없음 — 사진과 텍스트만). 콘텐츠 박스가 필요하면 `--color-surface-raised` + radius 16px + 패딩 16px.
- hover(데스크톱): 사진 `scale(1.04)` 250ms(overflow hidden) + 카드 `--shadow-2`. 모바일 press: 카드 `scale(0.98)`.
- 카드 안에 카드 금지. 카드 그리드는 gap 24px.

### 6.4 리스트 아이템

- min-height 56px, 상하 패딩 16px(좌우는 화면 패딩 24px). 구조: [아이콘 24px 또는 썸네일 40×40 radius 12px] –12px– [주 텍스트 16px/400 + 보조 13px/500 `--color-text-sub`] – [우측 값 caption 또는 셰브론 20px `--color-text-tertiary`].
- **행 사이 구분선은 그룹 경계에만**(`--color-border-soft` 1px). 같은 그룹 내 항목은 여백으로만 분리.
- press: 행 전체 bg `--color-surface` 150ms + `scale(0.99)`.

```css
.list-item { display: flex; align-items: center; gap: 12px; min-height: 56px; padding: 16px 0; }
.list-item .meta { margin-left: auto; font-size: 13px; font-weight: 500;
  color: var(--color-text-tertiary); font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비/앱바 + 사진 오버레이

- h 64px, 좌 뒤로가기/닫기(히트 44×44, 20px 인라인 SVG stroke 1.8px, bg 흰 원 `--color-surface-raised` + `--shadow-1` — 사진 위에 떠도 보이게), 중앙 비움 또는 타이틀 16px/600, 우측 보조 액션 최대 2개(공유·저장).
- 배경 `--color-bg`. 스크롤 시작 시 `--shadow-1` + 하단 헤어라인. **햄버거 메뉴 금지**(§10).
- **사진 오버레이 텍스트 스크림**: 사진 위 텍스트는 하단 그라데이션 `linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))` 위에서 `#FFFFFF`만. 상단 아이콘은 흰 원 배경 버튼으로.

### 6.6 하단 탭바 (모바일)

- h 64px + safe-area, 탭 4~5개(탐색/찜/여행/메시지/프로필). 각 탭: 24px 인라인 SVG 아이콘 + micro(12px/600) 라벨, 상하 패딩 8px, 히트 44px 이상.
- 활성 탭 `--color-primary`(아이콘 fill·라벨 색), 비활성 `--color-text-tertiary`. 탭 전환 시 아이콘 fade+scale(0.92→1) 150ms(오버슈트 없음).
- bg `--color-bg` + 상단 헤어라인 `1px solid var(--color-border-soft)`. 위쪽 그림자 없음(사진 마켓플레이스는 탭바를 조용히).

### 6.7 모달 / 바텀시트

- 기본은 **바텀시트**(필터·날짜 선택·게스트 수): 하단 부착, radius 24px 24px 0 0, bg `--color-surface-raised`, `--shadow-3`, 상단 좌측 닫기(✕) 또는 그랩바 32×4px `--color-border`, 헤더 title-2, 내부 패딩 24px, 하단 고정 액션 바(좌측 "지우기" ghost + 우측 primary "N개 보기").
- 진입 `translateY(100%)→0` 400ms `--ease-out` + 스크림(`--color-dim`) fade 250ms. 오버슈트 없음.
- 중앙 모달(파괴적 확인·예약 취소): 폭 `min(calc(100% - 48px), 380px)`, radius 24px, 패딩 24px, 본문 15px, 버튼 세로 스택(primary 위, ghost 아래) 또는 가로 2개, 각 h 48px, gap 12px.

### 6.8 토스트

- 하단 CTA(또는 탭바) 위 12px, bg `--color-text`(라이트)/`--color-surface-raised`(다크), 텍스트 15px/500 `--color-bg`(라이트)/`--color-text`(다크), radius 16px, 패딩 16px 24px, `--shadow-3`.
- 진입 `translateY(16px)+opacity 0→1` 250ms `--ease-out`, 3.5초 후 자동 소멸(200ms fade). 성공 토스트는 텍스트 앞 20px 체크 SVG `--color-success`.

### 6.9 뱃지 / 칩

- **뱃지**: h 24px, 패딩 4px 8px, radius 4px, micro(12px/600). soft 배경 + 대응 텍스트 조합만. 예: "슈퍼호스트" = `--color-surface` bg + `--color-text`; "게스트 선호" = `--color-primary-soft` + `--color-primary-soft-text`; "마감 임박" = `--color-danger-soft` + `--color-danger`. 순색 배경 뱃지 금지.
- **사진 위 오버레이 뱃지**(예: "게스트 선호"): 흰 알약 bg `rgba(255,255,255,0.96)` radius full, 텍스트 12px/600 `--color-overlay-ink`, 사진 좌상단 12px. 알약은 라이트/다크 모두 흰색이라 텍스트는 항상 잉크여야 하므로, 다크에서 밝아지는 `--color-text` 대신 다크에서도 오버라이드되지 않는 전용 토큰 `--color-overlay-ink`(#222222 고정)를 쓴다.
- **필터 칩**: h 40px(히트 44px), 패딩 8px 16px, radius full, 기본 bg `--color-bg` 테두리 `1px solid var(--color-border)` 텍스트 15px/500 `--color-text` → 선택 시 bg `--color-text` 텍스트 `--color-bg`(잉크 반전, 테두리 제거). press `scale(0.96)`.

### 6.10 빈 상태 (empty state)

- 세로 중앙 정렬: 64px 인라인 SVG 일러스트(단색 2톤: `--color-border` 면 + `--color-primary-vivid` 포인트) → 16px → 제목 title-3(18px/600) → 8px → 설명 body-2 `--color-text-sub` → 24px → primary 또는 secondary 버튼 h 48px.
- 카피는 §8 규칙: "아직 저장한 숙소가 없어요" + 다음 행동 제안 1줄("마음에 드는 곳에 하트를 눌러보세요"). 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "부드럽게 미끄러지고 조용히 멈춘다 — 바운스 없이, 사진처럼 우아하게."** (Jelly의 스프링 오버슈트와 정반대: Coral은 절제된 감속.)

**토큰:**

```css
--motion-fast: 150ms;   /* press·색/그림자 전환 */
--motion-base: 250ms;   /* 진입·이미지 줌·페이지 전환·토스트 */
--motion-slow: 400ms;   /* 바텀시트·성공 전환 */
--motion-stagger: 60ms; /* 카드 그리드 스태거(최대 6개) */

--ease-out: cubic-bezier(0.32, 0.72, 0, 1);     /* 진입·시트 — 조용히 정착(오버슈트 없음) */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);  /* 색·그림자·press */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);  /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 `scale(0.96)` 150ms `--ease-standard`. 리스트 행은 0.99, 카드는 0.98. 떼면 같은 곡선으로 복귀(스프링 금지) |
| 진입(entrance) | `opacity 0→1` + `translateY(8px)→0`, 250ms `--ease-out` |
| 카드 그리드 스태거 | 카드당 60ms 지연, 최대 6개까지(이후 동시 표시) |
| 페이지 전환 | 나가는 화면 fade-out 150ms → 들어오는 화면 진입 패턴. 상세 진입은 공유요소(사진) 확대 250ms 가능. 전체 좌우 슬라이드 금지 |
| 이미지 hover 줌 | 카드 사진 `scale(1)→1.04` 250ms `--ease-out`, 카드에 `--shadow-2` 동시 부여 |
| 찜 하트 | 탭 시 하트 `scale(1)→1.2→1` 250ms `--ease-out` + fill `--color-primary-vivid`. 파티클/폭죽 금지 |
| 바텀시트 | `translateY(100%)→0` 400ms `--ease-out`, 스크림 fade 250ms |
| 성공(예약 확정) | 체크 원 `scale(0.8)→1` 400ms `--ease-out`(오버슈트 없음) + 체크 패스 `stroke-dashoffset` 250ms(100ms 지연) |

**`prefers-reduced-motion` 대응 필수** (tokens.css 전역 블록): transform·그림자 애니메이션 제거, opacity 120ms만 유지. 이미지 줌·스태거 즉시 표시.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 120ms !important;
    transition-property: opacity !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 고정, 따뜻하고 초대하는 어조.** "~하십시오"·"~바랍니다" 금지. 반말 금지. 사용자를 여행자로 대접한다.
- 문장은 짧게(20자 내외), 사용자·장소가 주어("어디로 떠나세요?", "이 집은"). 시스템 주어("시스템이", "요청이") 금지.
- 이모지: **화면당 최대 1개**, 성공·빈 상태에서만. 버튼·에러·가격에는 금지.
- 가격은 통화기호 + 천 단위 콤마("₩128,000"), "1박에", "총액" 등 맥락 단어를 붙여 투명하게.

| 상황 | Coral 카피 | 금지 예 |
|---|---|---|
| 검색 진입 | 어디로 떠나세요? | 검색어를 입력하세요 |
| CTA (예약) | 예약하기 | 확인, 제출 |
| CTA (다음 단계) | 계속 | 다음 단계 진행 |
| 예약 확정 | 예약이 확정됐어요 | 예약이 정상 처리되었습니다 |
| 가격 안내 | 예약 확정 전까지는 요금이 청구되지 않아요 | 결제는 예약 완료 시 진행됩니다 |
| 에러 (날짜 미선택) | 여행 날짜를 먼저 골라주세요 | 필수 항목이 누락되었습니다 |
| 에러 (결제 실패) | 결제가 완료되지 않았어요. 카드를 다시 확인해 주세요 | 결제 오류 (E-402) |
| 빈 상태 (찜) | 아직 저장한 숙소가 없어요. 마음에 드는 곳에 하트를 눌러보세요 | 데이터가 존재하지 않습니다 |
| 로딩 | 좋은 곳을 찾고 있어요… | 로딩 중입니다 |
| 확인 다이얼로그 (취소) | 이 예약을 취소할까요? 환불 규정을 확인해 주세요 | 예약을 취소하시겠습니까? |
| 성공 토스트 | 위시리스트에 저장했어요 | 저장이 완료되었습니다 |
| 슈퍼호스트 소개 | 호스트 지원님은 후기 평점이 높은 슈퍼호스트예요 | 우수 등급 호스트입니다 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "잘못된 입력입니다", 반복되는 "죄송합니다", 느낌표 2개 이상, 과장된 마케팅("최저가 보장!!", "지금 아니면 놓쳐요").

## §9. 레이아웃 레시피 — 데모 5화면 (가상 숙소 예약 앱 "머무름 Meomu")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 24px, 데스크톱은 중앙 428px 프레임(§4).
하단 탭바(§6.6) 4탭: 탐색 / 찜 / 여행 / 프로필. screen-2·3은 탭바 대신 하단 고정 CTA. 사진은 인라인 SVG 플레이스홀더(단색 도형 2톤, `--color-surface`+`--color-primary-vivid`/`--color-accent`)로 대체 — 외부 이미지 금지.

### screen-1 탐색 (숙소 카드 그리드)

- 목적: 사진으로 훑어보며 떠나고 싶게 만든다.
- 위→아래: 앱바(좌측 워드마크 title-3, 우측 필터 아이콘 원형) → 16px → **필 검색바**(§6.2, "어디로 떠나세요? · 날짜 · 게스트" 3분할 힌트, `--shadow-2`) → 16px → 필터 칩 가로 스크롤(§6.9, "전체 / 해변 / 캠핑 / 한옥 / 풀빌라", 첫 칩 선택) → 24px → **숙소 카드 리스트**(§6.3, 1열 full-width, 카드 사이 24px): 각 카드 = 사진(1:1, radius 12px, 우상단 찜 하트, 좌상단 "게스트 선호" 오버레이 뱃지) + 제목/별점 + 위치 + 날짜 + 가격 → 탭바.
- 사용 컴포넌트: 앱바, 검색바, 필터 칩, 숙소 카드, 찜 하트, 탭바. 진입 시 카드 스태거(60ms). 카드 그림자는 hover에서만.

### screen-2 숙소 상세

- 목적: 사진과 정보로 신뢰를 쌓고 예약으로 이끈다.
- 위→아래: **사진 히어로**(full-bleed, 상단 떠 있는 뒤로가기/공유/저장 흰 원 버튼 §6.5) → 콘텐츠 패딩 24px 블록: 숙소명 title-2 → 4px → 위치·타입 body-2 sub("서울 종로구 · 한옥 전체") → 8px → 별점 행("★ 4.92 · 후기 128개") caption → 24px → 섹션 구분선 → 24px → **호스트 행**(아바타 48px + "호스트 지원님 · 슈퍼호스트" + 슈퍼호스트 뱃지 §6.9) → 24px → 편의시설 리스트(§6.4, 아이콘 24px + 라벨: 와이파이/주차/취사) → 24px → 소개 body-1 3줄 + "더 보기" 링크 → 24px → 지도 자리(surface 블록 radius 16px) → 하단 고정 CTA 바: 좌측 가격("₩128,000 title-3 /박" + "★4.92" caption), 우측 primary "예약하기".
- 사용 컴포넌트: 사진 오버레이 앱바, 뱃지, 리스트, 섹션 구분선, 하단 CTA 바.

### screen-3 예약 폼

- 목적: 날짜·인원·결제를 한 화면에서 투명하게.
- 위→아래: 앱바(뒤로가기 + "예약 요청" 타이틀) → 24px → 요약 카드(surface-raised radius 16px 패딩 16px: 좌측 썸네일 64px radius 12px + 숙소명 title-3 + "★4.92 · 후기 128" caption) → 24px → **날짜 선택 행**(리스트 아이템, 탭 시 캘린더 바텀시트 §6.7, "체크인 7/24 – 체크아웃 7/27") → 게스트 수 행(탭 시 스테퍼 바텀시트) → 24px → 섹션 구분선 → 24px → 요금 상세(§6.4 리스트: "₩128,000 × 3박" / "청소비" / "서비스 수수료" — 라벨 body-2 sub + 우측 금액 tabular-nums, 마지막 "총액" 행만 title-3/600) → 8px → 안내 문구 caption sub("예약 확정 전까지는 요금이 청구되지 않아요") → 하단 고정 CTA: primary "예약 요청하기".
- 에러: 날짜 미선택 시 날짜 행 테두리 danger + 헬퍼 §8 카피(흔들림 없이 색 전환만).

### screen-4 예약 확인 (성공)

- 목적: 확정을 기쁘고 안심되게 전한다.
- 세로 중앙 블록: **성공 체크**(원 80px bg `--color-success-soft`, 체크 SVG `--color-success` — §7 성공 모션, 오버슈트 없음) → 16px → "예약이 확정됐어요" display(32px/600) → 8px → "지원님, 즐거운 여행 되세요 🌿"(이모지 1개 허용) body-1 sub → 32px → 예약 카드(surface-raised radius 16px 패딩 24px: 썸네일 + 숙소명 title-3 + 날짜 "7/24 – 7/27 · 2박" body-2 + 주소 body-2 sub + 구분선 + "예약번호 MEO-2K7X" caption) → 24px → 액션: primary "예약 상세 보기" + ghost "홈으로".
- 진입: 체크 모션 후 카드 fade+translateY 250ms.

### screen-5 여행 목록

- 목적: 예정·지난 여행을 조용히 정리해 보여준다.
- 위→아래: 앱바(타이틀 "여행") → 16px → 세그먼트 칩 2개("예정 / 지난", §6.9 잉크 반전 선택) → 24px → **예정 여행 카드 리스트**(§6.3 변형, 가로형: 좌측 사진 96×96 radius 12px + 우측 숙소명 title-3 / 위치 body-2 sub / 날짜 caption + 상태 뱃지 "확정") → 카드 사이 24px → (지난 여행 탭은 흐린 썸네일 + "후기 남기기" secondary 버튼) → 빈 상태 시 §6.10("아직 예정된 여행이 없어요. 다음 여행지를 찾아볼까요?" + primary "숙소 둘러보기") → 탭바.
- 스크롤 시 앱바 헤어라인 표시. 진입 시 카드 스태거.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Coral에 데코 그라데이션은 없다. 히어로는 실제 사진(데모는 SVG 플레이스홀더). 유일한 그라데이션은 사진 위 텍스트용 검정 스크림.
2. 모든 카드에 동일 그림자 → 리스트/그리드 카드는 `--shadow-0`. shadow-2는 hover에서만. 상시 그림자 카드 = 위반.
3. 3열 아이콘+제목+설명 카드 반복 → 숙소 사진 카드 그리드만 다열 허용. 아이콘+제목+설명 3열 블록 금지.
4. `border: 1px solid #eee` 남발 → 헤어라인은 `--color-border`/`--color-border-soft`만, 허용처 §5 3곳 외 금지.
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(stroke 1.8px)만. 이모지는 §8 규칙(화면당 1개, 성공·빈 상태)만.
6. 화면마다 다른 radius → §5 스케일 6값만. 같은 컴포넌트는 항상 같은 radius.

**Coral 고유 금지** (C1~C7):
1. **C1 UI가 사진보다 튀는 것 금지** → 화면 시각 무게 1순위는 항상 사진. 순색 배경 블록·큰 컬러 배너가 사진보다 눈에 먼저 들어오면 실패. 사진 영역은 카드 폭의 최소 55% 높이.
2. **C2 포인트 색 남발 금지** → 코랄(primary)은 화면당 primary CTA 1개 + 찜 하트 + 선택 상태에만. 코랄 텍스트·코랄 배경 블록을 여기저기 뿌리면 위반. 나머지는 뉴트럴.
3. **C3 스프링/바운스 모션 금지** → Coral은 `--ease-out`(오버슈트 없음)로 조용히 감속. `cubic-bezier(...,1.56,...)`류 오버슈트, 찜 파티클/폭죽, 흔들림 에러 애니메이션 전부 금지.
4. **C4 굵은 헤비 타이포 금지** → weight 800/900 금지. 위계는 크기 + 500↔600 대비로. fintech식 초대형 볼드 숫자 금지(가격도 600까지).
5. **C5 격식체·시스템 말투 금지** → "~하십시오", "정상 처리되었습니다", 에러 코드 노출 전부 금지. §8 표의 따뜻한 해요체만.
6. **C6 상단 햄버거 메뉴·좌측 드로어 금지** → 내비게이션은 하단 탭바 + 검색바 + 화면 안 리스트로만.
7. **C7 촘촘한 그리드·데이터 테이블 금지** → `<table>` 0개, 3열 이상 아이콘 그리드 금지. 정보는 넉넉한 카드/리스트로 푼다. 카드 사이 간격은 항상 24px 이상.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/13-coral/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-primary-vivid: var(--color-primary-vivid);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --font-sans: var(--font-family);
  --ease-out: var(--ease-out);
}
```

```tsx
// 예약 CTA — press 물성(스케일만, 스프링 없음)
export function BookButton(props: React.ComponentProps<"button">) {
  return (
    <button
      className="h-13 rounded-lg bg-primary px-6 text-[16px] font-medium text-white
                 transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]
                 active:scale-[0.96] disabled:bg-border-soft disabled:text-text-tertiary"
      {...props}
    />
  );
}

// 숙소 카드 — 사진 radius 12, hover 줌, 카드 그림자 없음(hover만)
export function StayCard({ img, title, rating, place, dates, price }: StayCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden rounded-[12px]">
        <img src={img} alt=""
             className="aspect-square w-full object-cover transition-transform
                        duration-[250ms] ease-[cubic-bezier(0.32,0.72,0,1)]
                        group-hover:scale-[1.04]" />
      </div>
      <div className="mt-2 flex items-start justify-between gap-3">
        <h3 className="text-[18px] font-semibold text-text">{title}</h3>
        <span className="text-[13px] font-medium text-text tabular-nums">★ {rating}</span>
      </div>
      <p className="text-[15px] text-text-sub">{place}</p>
      <p className="text-[15px] text-text-tertiary">{dates}</p>
      <p className="mt-1 text-[18px] font-semibold text-text tabular-nums">
        ₩{price.toLocaleString()}<span className="font-normal"> /박</span>
      </p>
    </article>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는
StyleSeed theme.css 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Silk/Float" 계열(감속 슬라이드, 오버슈트 없음)에 대응(Jelly의 Spring과 대비).
`--font-size-*` 8단계는 StyleSeed type scale의 display/title/body/caption 슬롯에 순서대로 매핑한다.

## §12. 채점 루브릭

합격선: **verifiable 10항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text 쌍 4.5:1 이상, vivid·accent 그래픽 쌍 3:1 이상 | 10 | 결과물의 hex를 추출해 WCAG 공식으로 계산: `L=0.2126R'+0.7152G'+0.0722B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`. §2.3 표와 대조. 토큰을 무변경 사용했다면 §2.3 표 인용으로 통과 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|4\|8\|12\|16\|24\|32\|40\|48\|64)px'` → 출력 0줄 (20px·다른 값 발견 시 실패) |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vE ':\s*(12\|13\|15\|16\|18\|22\|26\|32)px'` → 출력 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|8\|12\|16\|24\|9999)px'` → 출력 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건. 리스트/그리드 카드에 상시 shadow 부여 시 감점 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 출력 0줄. 사진은 인라인 SVG 플레이스홀더여야 함 |
| V8 | press 물성: scale(0.96)과 non-spring easing 존재, 스프링/오버슈트 부재 | 10 | `grep -rF 'scale(0.96)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'cubic-bezier\(0\.32, ?0\.72, ?0, ?1\)\|var\(--ease-out\)\|var\(--ease-standard\)' $F \| wc -l` ≥ 1 **그리고** 오버슈트 곡선 부재: `grep -rE 'cubic-bezier\([^)]*1\.[0-9]' $F \| wc -l` = 0 (제어점 >1 = 바운스 → C3 위반) |
| V9 | 테이블·과밀 그리드 금지 + 금액 tabular-nums | 5 | `grep -ri '<table' $F \| wc -l` = 0 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'grid-template-columns:[^;]*(repeat\([5-9]\|1fr 1fr 1fr 1fr 1fr)' $F \| wc -l` = 0 (5열↑ 그리드 금지) |
| V10 | 헤비 웨이트 부재 (Coral 절제) | 5 | `grep -rhoE 'font-weight:\s*[0-9]+' $F \| grep -oE '[0-9]+' \| grep -vwE '(400\|500\|600\|700)' \| wc -l` = 0 (800/900 발견 시 실패) |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (사진 주인공·포인트 색 하나) | 컬러 블록·그라데이션이 화면을 채우고 사진이 작거나 없다 | 사진은 크지만 코랄이 여러 곳에 흩어져 산만하다 | 사진이 시선을 먼저 끌고, 코랄은 CTA·하트·선택에만, 나머지는 뉴트럴 |
| S2 | §8 어조 준수 | "정상 처리되었습니다"류 격식체 또는 에러 코드 노출 | 해요체이지만 문장이 길거나 시스템 주어가 혼재 | 전 카피가 따뜻한 해요체 한 호흡, 에러가 [상황+다음 행동], 여행자로 초대하는 톤 |
| S3 | 모션 물성 (§7, 오버슈트 없음) | 모션 없음 또는 스프링/바운스가 보인다(C3 위반) | 감속은 있으나 진입·이미지 줌 등 성격이 약하다 | 조용히 미끄러져 정착, 이미지 hover 줌·시트 슬라이드가 §7과 일치, 바운스 0 |
| S4 | 여백 호흡 (§4 리듬) | 요소가 빽빽하고 구분선·박스로 잘게 나눠져 있다 | 간격은 스케일 값이지만 섹션 리듬(32px)·카드 간격(24px)이 불규칙 | 선 없이 여백만으로 그룹이 읽히고, 24px 좌우 여백에 사진이 시원하게 놓인다 |
| S5 | §10 정성 항목 (사진 우선·CTA 수·색 면적·radius 일관) | 사진보다 UI가 튀거나 primary CTA 2개↑ 또는 헤비 볼드 | 금지 위반은 없으나 순색/코랄 면적이 넓어 산만 | 사진이 지배적, 화면당 CTA 1개, 코랄은 점처럼, radius 일관, 그림자는 hover만 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
