---
number: 16
codename: Jade
inspired-by: Naver (naver.com) — 서술 참조만. 상표는 파일/클래스명에 사용하지 않으며, 이 문서의 모든 수치는 독립 해석이지 공식 값이 아니다
mood: 신뢰감 있는 대중 포털. 초록 액션, 흰 배경, 정보 밀도 높은 리스트·피드, 검색이 주인공
best-for: 대중 포털·뉴스/콘텐츠 피드·검색 중심 서비스·정보 밀도 높은 웹/모바일
variants: [a, b]
status: spec-draft
---

# 16 · Jade

## §1. 첫인상 요약

1. **검색이 주인공이다.** 홈 화면 상단은 굵은 초록 테두리(2px)의 검색바가 지배하고, 그 오른쪽에 초록 검색 버튼이 붙는다. 다른 어떤 요소보다 먼저 눈에 들어온다.
2. **초록은 액션에만.** 브랜드 초록(#03C75A)은 로고·아이콘·강조 점 같은 그래픽에만 쓰고, 실제 버튼/링크는 대비를 확보한 짙은 초록(#007A3D)을 쓴다. 배경 면적을 초록으로 칠하지 않는다.
3. **밀도가 미덕이다.** 한 화면에 뉴스·날씨·주가·피드가 촘촘히 담긴다. 여백을 늘려 성기게 만들지 않는다 — 8~16px 리듬으로 정보를 빽빽하게, 대신 얇은 회색 구분선(1px)과 카드 경계로 질서를 만든다.
4. **흰 배경, 검은 글자, 회색 선.** 배경은 흰색(#FFFFFF), 본문은 거의 검정(#1A1D21), 구획은 1px 회색 선(#E3E5E9)으로 나눈다. 화면이 하얗고 단정하며 정보가 많아야 정상이다.
5. **조용하고 즉각적.** 모션은 절제된다. 탭하면 배경이 살짝 눌리고(bg 하이라이트) 콘텐츠가 빠르게(160~220ms) 뜬다. 튀는 스프링·과장된 진입은 없다.

## §2. 색

### 2.1 팔레트

시맨틱 토큰 전체 표 (a 변형 기준. b 변형은 §2.4 규칙으로 파생, 값은 tokens.css 참조):

| 토큰 | 역할 | a 라이트 | a 다크 |
|---|---|---|---|
| `--color-bg` | 화면 배경 | `#FFFFFF` | `#16181C` |
| `--color-surface` | 피드/섹션 바탕, 검색 입력 배경 | `#F4F5F7` | `#1E2126` |
| `--color-surface-raised` | 카드·드롭다운·시트 배경 | `#FFFFFF` | `#262A31` |
| `--color-text` | 제목·본문 | `#1A1D21` | `#E9ECF0` |
| `--color-text-sub` | 보조 본문 (요약·설명) | `#565C64` | `#A2A9B2` |
| `--color-text-tertiary` | 메타 (출처·시간·카테고리) | `#656B73` | `#8C939C` |
| `--color-primary` | CTA·링크·검색 버튼 (액션 초록) | `#007A3D` | `#05C15A` |
| `--color-primary-text` | primary 위 텍스트 | `#FFFFFF` | `#08120C` |
| `--color-primary-pressed` | primary press 상태 | `#00632F` | `#04A94F` |
| `--color-primary-soft` | 연한 초록 배경 (선택 탭·안내) | `#E6F6EC` | `#12291C` |
| `--color-primary-soft-text` | soft 위 텍스트, 다크의 초록 텍스트 | `#006F37` | `#43D588` |
| `--color-accent` | 브랜드 강조 (로고·아이콘·강조 점, **그래픽 전용**) | `#03C75A` | `#05C15A` |
| `--color-danger` | 삭제·에러·급등락(하락) | `#D42432` | `#FF6B72` |
| `--color-danger-soft` | 에러 배경 | `#FDECEC` | `#3A1D20` |
| `--color-danger-text` | danger 위 텍스트 | `#FFFFFF` | `#2A0E10` |
| `--color-success` | 완료·인증·상승 | `#0A7D41` | `#43D588` |
| `--color-success-soft` | 완료/상승 배경 | `#E6F6EC` | `#12291C` |
| `--color-border` | 얇은 구분선·카드 경계 (1px) | `#E3E5E9` | `#2E323A` |
| `--color-border-strong` | 강한 구분·검색바 테두리 보조 (2px) | `#D0D3D9` | `#3B404A` |
| `--color-dim` | 모달/드롭다운 뒤 딤 | `rgba(20,22,26,0.55)` | `rgba(0,0,0,0.62)` |

### 2.2 라이트/다크

라이트가 기본이자 주력이다(대중 포털의 낮 시간 사용 맥락). 다크는 완전 지원한다(위 표).

- **라이트**: 순백 배경 + 짙은 액션 초록(#007A3D, 흰 텍스트) + 얇은 회색 선. 밝은 브랜드 초록(#03C75A)은 로고·아이콘 등 그래픽에만.
- **다크**: 순검정 대신 `#16181C`(살짝 푸른 흑색). 다크에서는 액션 초록을 **밝은 브랜드 초록(#05C15A)** 으로 올리고 그 위 텍스트를 짙은 초록-검정(#08120C)으로 반전한다(어두운 배경에서 초록의 생기를 살리는 방식). 링크성 초록 텍스트는 `--color-primary-soft-text`(#43D588)를 쓴다.
- danger/success는 다크에서 한 단계 밝게(#FF6B72 / #43D588) 교체해 가독 확보.

### 2.3 대비 규칙 (실측 계산값 명기)

기준: **본문 4.5:1 이상, 대형 텍스트(22px+ 또는 18px+/700)·UI 그래픽 3:1 이상.**
아래는 WCAG 2.x 상대휘도 공식으로 계산한 실제 대비율이다.
`L = 0.2126·R' + 0.7152·G' + 0.0722·B'` (c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4), `CR=(L1+0.05)/(L2+0.05)`.

| 쌍 | a 라이트 | a 다크 | 판정 |
|---|---|---|---|
| bg / text | **16.91:1** | **15.00:1** | ✓ 본문 |
| surface / text | **15.50:1** | **13.62:1** | ✓ 본문 |
| bg / text-sub | **6.75:1** | **7.49:1** | ✓ 본문 |
| surface / text-sub | **6.19:1** | **6.81:1** | ✓ 본문 |
| bg / text-tertiary | **5.38:1** | **5.73:1** | ✓ 본문 |
| surface / text-tertiary | **4.93:1** | **5.20:1** | ✓ 본문 |
| primary / primary-text | **5.45:1** | **7.97:1** | ✓ 본문 |
| primary(텍스트·링크로) / bg | **5.45:1** | **7.43:1** | ✓ 본문 |
| primary(텍스트·링크로) / surface | **5.00:1** | **6.75:1** | ✓ 본문 |
| primary-soft / primary-soft-text | **5.63:1** | **8.17:1** | ✓ 본문 |
| danger / bg | **5.12:1** | **6.43:1** | ✓ 본문 |
| danger / surface | **4.70:1** | **5.84:1** | ✓ 본문 |
| danger / danger-text | **5.12:1** | **6.50:1** | ✓ 본문 |
| success / bg | **5.22:1** | **9.40:1** | ✓ 본문 |
| success / surface | **4.79:1** | **8.54:1** | ✓ 본문 |
| accent(#03C75A) / bg | **2.25:1** | **7.43:1** | 라이트: 그래픽 전용(§ 아래 제약), 다크: ✓ |
| border-strong / bg | **1.50:1** | **1.71:1** | 비텍스트 구분선 — 대비 대상 아님 |

b 변형(블루 포털) 주요 쌍 실측: 라이트 primary(#1A62D6)/흰 텍스트 **5.58:1**, primary/surface **5.12:1**, soft(#E8F0FE)/soft-text(#1550BE) **6.27:1**, accent(#2F8FFF)/bg **3.23:1**(그래픽) — 다크 primary(#4C8DFF)/primary-text(#0A1424) **5.76:1**, soft(#152238)/soft-text(#7FB0FF) **7.25:1**, accent/bg **5.55:1**. 텍스트 쌍 전부 통과.

추가 제약 (위 표에서 도출):
- **`--color-accent`(#03C75A)는 라이트에서 그래픽 전용.** 로고·24px 아이콘·강조 점·차트 계열에만. bg 대비 2.25:1이므로 텍스트·본질적 UI 경계에 사용 시 위반. 액션(버튼/링크)은 반드시 `--color-primary`(#007A3D). 다크에서는 accent=primary(#05C15A)로 통합되어 텍스트로도 허용.
- **primary 위 텍스트는 항상 `--color-primary-text`.** 라이트=흰색, 다크=짙은 초록-검정. 임의 색 금지.
- **다크에서 초록 텍스트/링크는 `--color-primary-soft-text`(#43D588)** 를 쓴다(밝은 primary #05C15A는 다크 bg 대비 텍스트로도 되지만, 본문 크기에는 soft-text 권장).
- `--color-border`(#E3E5E9)·`--color-border-strong`는 **구분선/경계 전용**이며 텍스트나 아이콘 형태 정보를 담지 않는다(장식적 구획선 → WCAG 3:1 비대상).
- 새 색 조합은 이 표의 해당 행을 재계산해 4.5/3.0을 넘겨야 채택한다. 미달이면 폐기.

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (변형이 건드릴 수 없는 것):**
- 뉴트럴 램프 전체: bg/surface/surface-raised/text/text-sub/text-tertiary/border/border-strong/dim의 정확한 hex 값. 포털의 "흰 배경 + 회색 선 + 검은 글자" 골격은 불변이다.
- danger(hue 350~5)·success(hue 145~160)의 의미와 값. 삭제/에러=danger, 완료/인증=success 매핑.
- 토큰 구조: primary 5종 세트(primary/text/pressed/soft/soft-text) + accent를 반드시 전부 제공.
- 채도·명도 범위: 라이트 primary는 HSL 기준 **S 55~100%, L 24~34%**(흰 텍스트 4.5:1 및 surface 위 텍스트 4.5:1 동시 확보 구간). soft는 동일 hue에 **S 20~45%, L 93~97%**(라이트) / **S 30~55%, L 11~17%**(다크).
- accent는 라이트에서 그래픽 전용으로만 존재할 수 있고, 그 경우 bg 대비 3:1 미달이어도 허용하되 텍스트 사용은 항상 금지(§2.3).

**자유 (변형이 바꾸는 것):**
- primary hue 0~360 자유. 단 danger(350~5)·success(145~160)와 ±15° 이내로 겹치면 시맨틱 색과 혼동되므로 피해서 다시 뽑는다. (a 변형의 초록 primary hue≈150은 success와 인접하지만, 액션 초록은 짙은 톤(L~29%)·success는 별도 값으로 고정하여 의도적으로 채택한 정식 변형. b 변형은 hue 220 블루로 겹침 없음.)
- accent는 primary hue **±0~40°** 이내(라이트는 같은 hue의 더 밝은 톤=브랜드 그래픽 색으로 두는 것을 기본으로 한다).
- 다크 primary는 (1) 라이트 값 유지 + 흰 텍스트 또는 (2) L 55~65%로 밝힌 뒤 primary-text를 같은 hue의 L 6~12% 짙은 색으로 반전(a 방식) 중 택1. b는 (1)+밝힌 톤 방식.

**랜덤 명명 `16-r<hue>`** (예: `16-r220` = hue 220 변형):
1. hue h를 뽑는다 → `primary = hsl(h, 78%, 30%)`에서 시작.
2. 흰 텍스트 대비 4.5:1 **그리고** surface(#F4F5F7) 위 텍스트 4.5:1을 둘 다 만족할 때까지 L을 2%p씩 내려 **최초 통과값을 채택**(결정적 절차 — 같은 이름이면 항상 같은 색).
3. pressed는 primary에서 L −8%p, soft는 동일 h에 S 30%/L 95%(라이트)·S 45%/L 14%(다크)로 파생. accent는 동일 h에 S 90%/L 50%(그래픽 전용).
4. §2.3 표의 전 행을 재계산해 하나라도 미달이면 그 hue는 폐기하고 다시 뽑는다. 통과한 hue만 `16-r<h>`로 명명.

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폴백만):

```css
--font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
               'Malgun Gothic', 'Segoe UI', system-ui, Roboto, sans-serif;
```

숫자(주가·수치·시간)는 `font-variant-numeric: tabular-nums`를 켠다.

**타입 스케일** — 이 10단계(px) 외 font-size 사용 금지:

| 이름 | size | weight | line-height | letter-spacing | 용도 |
|---|---|---|---|---|---|
| display | 28px | 800 | 1.25 | -0.02em | 데스크톱 홈 히어로 타이틀 (드묾) |
| title-1 | 22px | 700 | 1.3 | -0.01em | 콘텐츠 상세 제목, 로그인 화면 타이틀 |
| title-2 | 18px | 700 | 1.35 | -0.01em | 섹션 헤더 ("뉴스", "쇼핑"), 바텀시트 제목 |
| title-3 | 16px | 700 | 1.4 | -0.01em | 카드 제목, 피드 아이템 제목 |
| body-1 | 15px | 500 | 1.55 | 0 | 본문, 리스트 주 텍스트, 검색 입력값, 버튼 라벨(700) |
| body-2 | 14px | 500 | 1.5 | 0 | 뉴스 요약, 리스트 보조 텍스트 |
| label | 13px | 500 | 1.45 | 0 | 메타(출처·시간), 카테고리 라벨, 폼 라벨 |
| micro | 12px | 600 | 1.35 | 0 | 뱃지·탭 라벨·태그 (최소 크기, 이보다 작게 금지) |
| num-lg | 20px | 700 | 1.2 | -0.01em | 주가·수치 강조, 마이페이지 통계 숫자 |
| num-md | 26px | 800 | 1.15 | -0.02em | 로그인 후 포인트/자산 등 단일 대형 숫자 |

**위계 규칙:**
- 한 화면에 display/num-md 계열 대형은 **최대 1개**. title-1도 화면당 1개(상세 제목 겸용). 섹션은 title-2, 카드/피드 아이템은 title-3.
- 헤딩 레벨은 화면당 최대 3단계(title-2 → title-3 → body).
- **수치(주가·통계·시간·개수)는 `tabular-nums` + weight 700 이상.** 상승은 `--color-success`, 하락은 `--color-danger`, 등락 기호(▲▼) 동반.
- 사용 weight는 **500/600/700/800의 4종만**. 400 금지(한글 저대비), 900 금지.
- 링크 텍스트는 body 크기 + `--color-primary`(라이트)/`--color-primary-soft-text`(다크), 밑줄은 hover 시에만.

**금지:** 임의 font-size 사용 금지 — 위 스케일 10값만. rem/em 단위도 스케일 이탈로 간주(§12 V3).

## §4. 간격 · 레이아웃

**스페이싱 스케일** — 이 값 외 margin/padding/gap 사용 금지 (0 제외):

```
2  4  8  12  16  20  24  32  40  48  64  (px)
```

(2px는 뱃지 내부·아이콘-라벨 미세 간격 등 밀도 높은 크롬 전용. 본문 리듬은 8~24px.)

| 항목 | 값 |
|---|---|
| 화면 좌우 기본 패딩 (모바일) | 16px |
| 섹션 간 간격 | 24px (큰 블록 전환 32px) |
| 섹션 내 헤더↔콘텐츠 | 12px |
| 카드 내부 패딩 | 16px |
| 피드/리스트 아이템 상하 패딩 | 12px (행 min-height 48px) |
| 리스트 아이템 내 썸네일↔텍스트 | 12px |
| 제목↔요약 | 4px, 요약↔메타 4px |
| GNB(상단바) 높이 | 52px |
| 하단 탭바 높이 | 56px + `env(safe-area-inset-bottom)` |
| 하단 고정 CTA | 버튼 높이 48px, 좌우 16px, 아래 8px + safe-area |
| 터치 타깃 | 최소 44×44px (시각 크기가 작아도 히트 영역 확보) |

**컨테이너·그리드:**
- 모바일 기준 폭 390px, 단일 컬럼 + 세로 스택 피드. 화면 패딩 16px.
- **데스크톱(1024px+)**: 중앙 콘텐츠 `max-width: 1080px; margin: 0 auto` + 좌우 24px 거터. 홈/검색 결과는 **본문 720px + 우측 사이드 300px(gap 24px) 2단** 레이아웃 허용(포털의 메인+위젯 구조). 상세/로그인/마이페이지는 단일 컬럼 최대 720px.
- 피드 카드 그리드: 데스크톱에서 gap 16px **2열**까지 허용(썸네일 카드). 3열 이상은 쇼핑 상품 그리드에 한해 gap 12px로 허용하되 아이콘+제목+설명 반복 카드에는 금지(§10).

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 border-radius 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 4px | 뱃지, 태그, 작은 썸네일, 입력 내부 |
| `--radius-md` | 6px | 버튼, 입력 필드, 검색바 |
| `--radius-lg` | 8px | 카드, 드롭다운, 안내 박스 |
| `--radius-xl` | 12px | 모달, 큰 이미지 카드 |
| `--radius-2xl` | 16px | 바텀시트 상단 모서리 |
| `--radius-full` | 999px | 필 칩, 아바타, 아이콘 원, 토글, 초록 검색 점 |

- 인터랙티브 요소의 radius는 4~8px 범위로 **단정하게**. 12px 이상 둥근 버튼은 이 프리셋에 없다(핀테크가 아니라 포털이다).
- **border를 적극 사용한다.** Jade의 질서는 여백이 아니라 얇은 회색 선이 만든다:
  - 카드 경계 `1px solid var(--color-border)`,
  - 섹션/리스트 그룹 구분 `1px solid var(--color-border)`,
  - 검색바 테두리 `2px solid var(--color-primary)`(포커스)/`2px solid var(--color-border-strong)`(기본) — 이 초록 2px 테두리가 브랜드 시그니처,
  - 입력 필드 `1px solid var(--color-border)` → focus 시 `--color-primary`.
- 리스트 행 사이 구분선은 허용하되 **1px `--color-border` 한 종류로 통일**(굵기·색 혼용 금지).

**shadow/elevation 단계** (다크 값은 tokens.css에서 검정 기반 오버라이드):

| 토큰 | 라이트 값 | 다크 값 | 용도 |
|---|---|---|---|
| `--shadow-0` | `none` | `none` | 기본. 카드·피드는 그림자 없이 border로 구분 |
| `--shadow-1` | `0 1px 3px rgba(20,22,26,0.10)` | `0 1px 3px rgba(0,0,0,0.5)` | sticky GNB, 하단 CTA 바, 드롭다운 |
| `--shadow-2` | `0 4px 16px rgba(20,22,26,0.14)` | `0 4px 16px rgba(0,0,0,0.6)` | 모달, 바텀시트, 팝오버 |
| `--shadow-3` | `0 8px 28px rgba(20,22,26,0.18)` | `0 8px 28px rgba(0,0,0,0.68)` | 떠 있는 검색 자동완성 패널(드묾) |

## §6. 핵심 컴포넌트 규칙

공통 press 물성: 인터랙티브 요소는 `:active`에서 배경 하이라이트(리스트/버튼: bg 한 단계 변화) + `transform: scale(0.98)` 100ms `--ease-standard`. 스프링 오버슈트 없음.

### 6.1 버튼 (primary / secondary / ghost)

- **primary**: h 48px(하단 CTA)/40px(인라인), radius 6px, bg `--color-primary`, 라벨 15px/700 `--color-primary-text`. 하단 CTA 가로 꽉 참, 인라인은 좌우 패딩 20px.
- **secondary**: 동일 치수, bg `--color-surface-raised`, `1px solid var(--color-border-strong)`, 라벨 15px/700 `--color-text`.
- **ghost**: bg 투명, 라벨 14px/600 `--color-text-sub`, h 40px. 취소·부가 액션 전용.
- 상태: hover(데스크톱) `filter: brightness(1.05)` / press bg `--color-primary-pressed` + `scale(0.98)` / disabled bg `--color-surface`, 라벨 `--color-text-tertiary`, border 없음 / focus-visible `outline: 2px solid var(--color-primary); outline-offset: 2px`.

```css
.btn-primary { height: 48px; border: 0; border-radius: var(--radius-md);
  background: var(--color-primary); color: var(--color-primary-text);
  font-size: 15px; font-weight: 700;
  transition: transform var(--motion-instant) var(--ease-standard),
              background var(--motion-fast) linear; }
.btn-primary:active { transform: scale(0.98); background: var(--color-primary-pressed); }
.btn-primary:disabled { background: var(--color-surface); color: var(--color-text-tertiary); }
```

### 6.2 입력 필드 · 검색바

- **일반 입력**: h 44px, `1px solid var(--color-border)`, radius 6px, 패딩 좌우 12px, 값 15px/500, placeholder `--color-text-tertiary`. focus 시 border `--color-primary` 2px(200ms). 라벨 13px/500 `--color-text-sub`(필드 위 4px).
- **검색바(시그니처)**: h 48px, `2px solid var(--color-primary)`(기본부터 초록 테두리), radius 6px, 좌측 12px 패딩에 입력, **우측에 초록 검색 버튼**(정사각 48px 또는 원형 "검색 점": bg `--color-primary`, 흰 돋보기 SVG 24px). 입력값 16px/500. focus 시 `--shadow-1` 추가.
- 에러: border·헬퍼 텍스트(13px)를 `--color-danger`로. 흔들림 없음(포털은 절제) — 헬퍼 텍스트만 표시.

### 6.3 카드

- bg `--color-surface-raised`, `1px solid var(--color-border)`, radius 8px, 패딩 16px, `--shadow-0`.
- 피드 카드(썸네일형): 좌측 텍스트(제목 title-3 → 요약 body-2 2줄 말줄임 → 메타 label) + 우측 썸네일 80×80 radius 4px. 또는 상단 16:9 이미지 + 하단 텍스트.
- 카드 안에 카드 금지. 카드 제목은 title-3.

### 6.4 리스트/피드 아이템

- min-height 48px, 상하 패딩 12px. 구조: [썸네일/아이콘 좌측] –12px– [제목 title-3 또는 body-1 + 메타 label `--color-text-tertiary`] – [우측 보조(수치·셰브론)].
- **행 사이 구분선 1px `--color-border` 사용**(밀도형 리스트의 질서). 그룹 마지막 행은 선 생략 가능.
- 수치 리스트(주가 등): 우측 num 계열 tabular, 상승 `--color-success`+▲, 하락 `--color-danger`+▼.
- press: 행 전체 bg `--color-surface` 100ms + `scale(0.98)`.

```css
.feed-item { display: flex; gap: 12px; min-height: 48px; padding: 12px 0;
  border-bottom: 1px solid var(--color-border); }
.feed-item .meta { font-size: 13px; color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums; }
```

### 6.5 상단 네비 / GNB

- h 52px, 좌측 워드마크(16px/800 `--color-primary`) 또는 뒤로가기(44×44 히트, 24px SVG), 중앙 페이지 타이틀 16px/700(상세 화면), 우측 액션 최대 2개(검색·알림·프로필, 각 24px SVG 히트 44px).
- 배경 `--color-bg`, 하단 `1px solid var(--color-border)`. 스크롤 시 `--shadow-1` 추가.
- 데스크톱 GNB: 동일 높이, 로고 + 가로 메뉴(뉴스/쇼핑/등, label 14px/600, 활성 탭 `--color-primary` + 하단 2px 초록 인디케이터) + 우측 검색·프로필.

### 6.6 하단 탭바 (모바일)

- h 56px + safe-area, 탭 4~5개. 각 탭: 24px SVG 아이콘 + micro(12px/600) 라벨, 상하 패딩 6px→8px(gap 2px), 히트 44px+.
- 활성 `--color-primary`(아이콘·라벨), 비활성 `--color-text-tertiary`. 전환 시 아이콘 `opacity`/색만 160ms(스케일 튐 없음).
- bg `--color-bg` + 상단 `1px solid var(--color-border)` + `--shadow-1`.

### 6.7 모달 / 바텀시트 / 드롭다운

- **드롭다운(포털 주력)**: 앵커 아래 4px, bg `--color-surface-raised`, `1px solid var(--color-border)`, radius 8px, `--shadow-1`, 항목 h 40px 패딩 좌우 12px, hover/press bg `--color-surface`.
- **바텀시트(모바일)**: 하단 부착, radius 16px 16px 0 0, bg `--color-surface-raised`, `--shadow-2`, 그랩바 32×4 `--color-border` radius full(위 8px), 패딩 16px, 제목 title-2. 진입 `translateY(100%)→0` 220ms `--ease-out` + 딤 페이드 160ms.
- **중앙 모달(확인/파괴적)**: 폭 `min(360px, calc(100% - 32px))`, radius 12px, `--shadow-2`, 제목 title-2 + 본문 14px + 버튼 2개(ghost + primary/danger) 가로, 각 h 40px gap 8px.

### 6.8 토스트

- 하단 탭바(또는 CTA) 위 8px, bg `--color-text`(라이트)/`--color-surface-raised`(다크), 텍스트 14px/600 `--color-bg`(라이트)/`--color-text`(다크), radius 6px, 패딩 12px 16px, `--shadow-2`.
- 진입 `translateY(8px)+opacity 0→1` 160ms `--ease-out`, 3초 후 페이드(160ms). 성공은 앞에 16px 체크 SVG `--color-success`.

### 6.9 뱃지 / 칩 / 태그

- **뱃지**: h 20px, 패딩 2px 6px, radius 4px, micro(12px/600). soft 배경+대응 텍스트만(`--color-primary-soft`+soft-text, `--color-danger-soft`+danger, `--color-success-soft`+success). 순색 배경 금지. "N", "AD", "LIVE" 등.
- **선택 칩/카테고리 탭**: h 34px(히트 44px), 패딩 6px 12px, radius full, 기본 bg `--color-surface` 텍스트 14px/600 `--color-text-sub` → 선택 시 bg `--color-primary-soft` 텍스트 `--color-primary-soft-text`(또는 텍스트+하단 2px 초록 인디케이터 방식). press `scale(0.98)`.
- **태그(해시)**: label 13px `--color-primary`(라이트)/soft-text(다크), 배경 없음, 앞에 "#".

### 6.10 빈 상태 (empty state)

- 세로 중앙: 56×56 SVG 일러스트(2톤: `--color-border` 면 + `--color-accent` 포인트) → 12px → 제목 16px/700 → 4px → 설명 14px/500 `--color-text-sub` → 20px → secondary 버튼 h 40px.
- 카피는 §8 규칙: "검색 결과가 없어요" + 다음 행동 1줄. 사과·경고 톤 금지.

## §7. 모션

**모션 성격 한 줄: "즉각적이고 절제됨 — 정보가 빠르게 뜨고 조용히 정착한다. 튀지 않는다."**

**토큰:**

```css
--motion-instant: 100ms; /* press 반응 */
--motion-fast:    160ms; /* fade, 색 전환, 드롭다운, 토스트 */
--motion-base:    220ms; /* 진입, 시트, 페이지 전환 */
--motion-slow:    320ms; /* 성공 체크 등 1회성 강조 */
--ease-standard: cubic-bezier(0.2, 0, 0, 1);   /* 기본 (감속 위주) */
--ease-out:      cubic-bezier(0, 0, 0.2, 1);    /* 진입 */
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);  /* 위치 이동 */
```

**패턴별 규칙:**

| 패턴 | 규칙 |
|---|---|
| press | `:active`에서 bg 하이라이트 + `scale(0.98)` 100ms `--ease-standard`. 스프링/오버슈트 금지 |
| 진입(entrance) | `opacity 0→1` (+`translateY(6px)→0` 선택) 220ms `--ease-out`. 과장된 이동 금지 |
| 리스트/피드 스태거 | 항목당 30ms 지연, 최대 6개(이후 동시). 절제적으로만 |
| 페이지 전환 | 나가는 화면 fade-out 160ms → 들어오는 화면 fade-in. 좌우 슬라이드 금지 |
| 드롭다운/자동완성 | `opacity 0→1` + `translateY(-4px)→0` 160ms `--ease-out` |
| 탭 인디케이터 | 하단 2px 초록 바가 활성 탭으로 `transform: translateX` 160ms `--ease-in-out` |
| 성공 체크 | 원 `scale(0.9)→1` + 체크 `stroke-dashoffset` 320ms `--ease-out`(과한 바운스 없음) |
| 수치 변화 | 주가/카운트 등은 즉시 갱신 또는 160ms opacity 크로스페이드. 카운트업 애니메이션은 로그인 후 대형 숫자 1곳까지만 |

**`prefers-reduced-motion` 대응 필수:** transform 기반 애니메이션 전부 제거, opacity 120ms만 유지. 카운트업·스태거 즉시 최종 상태.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 120ms !important;
    transition-property: opacity !important;
    scroll-behavior: auto !important;
  }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **해요체 기본, 정보 전달형.** 친근하되 들뜨지 않는다. 대중 포털의 신뢰감 — 정확하고 담백하게.
- 문장은 짧고 명확하게(20자 내외). 과장·감탄 최소, 느낌표는 성공·환영에서만 1개.
- 사용자가 주어("내 검색 기록", "받은 알림"). 시스템 주어("시스템이", "요청이") 금지.
- 이모지: 원칙적으로 쓰지 않는다(정보 밀도·신뢰감 우선). 빈 상태 일러스트로 감정 표현을 대신한다.
- 숫자는 천 단위 콤마, 시간은 상대 표기("3분 전", "어제"), 큰 수는 "1.2만"·"3.4억" 축약 허용.

| 상황 | Jade 카피 | 금지 예 |
|---|---|---|
| 검색 버튼 | 검색 | 찾기, GO |
| CTA (로그인) | 로그인 | 확인, 제출 |
| CTA (다음 단계) | 다음 | 계속하기, 진행 |
| 저장/구독 | 구독 / 저장했어요 | 구독하기가 완료되었습니다 |
| 에러 (검색 결과 없음) | '○○'에 대한 검색 결과가 없어요. 다른 검색어로 찾아보세요 | 검색 결과가 존재하지 않습니다 |
| 에러 (네트워크) | 연결이 불안정해요. 잠시 후 다시 시도해 주세요 | 네트워크 오류 (E-1024) |
| 에러 (로그인 실패) | 아이디 또는 비밀번호를 다시 확인해 주세요 | 로그인에 실패하였습니다 |
| 빈 상태 (알림) | 새로운 알림이 없어요 | 데이터가 없습니다 |
| 로딩 | 불러오는 중… | 로딩 중입니다. 기다려 주십시오 |
| 확인 다이얼로그 | 이 기록을 삭제할까요? | 삭제를 진행하시겠습니까? |
| 성공 토스트 | 저장했어요 | 저장이 완료되었습니다 |
| 환영 | ○○님, 반가워요 | 접속을 환영합니다 |

- 에러는 항상 **[무슨 일인지 1문장] + [지금 할 수 있는 일 1문장]** 구조. 에러 코드·기술 용어 노출 금지.
- 금지 표현: "실패하였습니다", "잘못된 입력입니다", "~하십시오/~바랍니다"(격식체), 반복되는 "죄송합니다", 느낌표 2개 이상.

## §9. 레이아웃 레시피 — 데모 5화면 (가상 포털 "그린포털 GreenPortal")

모든 화면 공통: 모바일 390px 단일 컬럼, 화면 패딩 16px. 데스크톱은 중앙 1080px(홈·검색은 720+300 2단). 하단 탭바(§6.6) 4탭: 홈 / 뉴스 / 쇼핑 / MY. 상세·로그인은 탭바 대신 GNB 뒤로가기.

### screen-1 홈 (검색 + 통합 피드)

- 목적: 검색을 즉시 노출하고, 스크롤로 정보를 훑게 한다.
- 위→아래: GNB(좌 워드마크 16px/800 `--color-primary`, 우 알림 벨·프로필 24px SVG) → 16px → **검색바(§6.2 시그니처: 초록 2px 테두리 + 우측 초록 검색 버튼)** → 20px → 바로가기 아이콘 행(가로 스크롤, 48px 원형 아이콘 + micro 라벨 8개, 아이콘 색 `--color-accent`) → 24px → **날씨·주가 위젯 카드**(2열 gap 16px: 날씨 카드 = 온도 num-lg + 위치 label / 지수 카드 = 지수 num-lg + 등락 `--color-success`/`--color-danger` ▲▼) → 24px → 섹션 헤더 "뉴스"(title-2 + 우측 "더보기" label 링크) → 12px → 뉴스 피드(§6.4 썸네일형 5개, 행 사이 1px border) → 24px → 섹션 "쇼핑" 상품 2열 그리드 → 탭바.
- 사용 컴포넌트: GNB, 검색바, 칩/아이콘 행, 카드, 피드 아이템, 탭바. 진입 시 피드 스태거(30ms).

### screen-2 검색 결과

- 목적: 질의어에 대한 탭별 결과를 밀도 높게.
- 위→아래: GNB(뒤로가기 + 검색바 축소형: 질의어 표시 + 편집) → 하단 `1px border` → **결과 탭 바**(가로 스크롤 칩/탭: 통합 / 뉴스 / 이미지 / 쇼핑 / 지식, 활성 탭 하단 2px 초록 인디케이터) → 결과 리스트: 스폰서 뱃지("AD" 뱃지 §6.9)가 붙은 상단 결과 → 웹문서 결과(제목 title-3 `--color-primary` 링크 + URL label `--color-text-tertiary` + 요약 body-2 2줄) 반복, 행 사이 1px border → 중간 삽입 "이미지" 가로 스크롤 썸네일 스트립(80px 정사각 radius 4px) → 하단 페이지네이션 또는 "결과 더보기" secondary 버튼.
- 빈 상태: §6.10 + §8 "검색 결과가 없어요" 카피.

### screen-3 콘텐츠 상세 (뉴스/글)

- 목적: 읽기에 집중, 부가 정보는 하단.
- 위→아래: GNB(뒤로가기 + 우측 공유·저장 24px SVG) → 스크롤 콘텐츠: 카테고리 label `--color-primary` → 4px → 제목 title-1 → 8px → 메타 행(출처 로고 20px + 매체명 label + "3분 전" `--color-text-tertiary`) → 16px → 대표 이미지 16:9 radius 8px → 16px → 본문(body-1, 문단 간 16px) → 24px → 반응 바(좋아요·댓글·공유 아이콘 24px + 카운트 label, 좌우 배치, 상하 1px border) → 24px → 섹션 "관련 기사"(title-2 + 피드 3개) → 24px → 댓글 섹션(입력 필드 + 댓글 리스트: 아바타 32px + 이름 label/700 + 본문 body-2 + 메타).
- press: 좋아요 탭 시 아이콘 색 `--color-primary` 전환(스케일 튐 없음, 160ms).

### screen-4 로그인

- 목적: 신뢰감 있게, 초록 브랜드를 CTA에 집중.
- 위→아래: GNB(닫기 X만) → 40px → 워드마크(중앙, num-md 크기 로고 텍스트 `--color-primary`) → 32px → 입력 그룹: 아이디 입력(§6.2, 라벨 "아이디") → 12px → 비밀번호 입력(우측 눈 아이콘 토글) → 16px → 로그인 상태 유지 체크박스(라벨 14px) + 우측 "비밀번호 찾기" label 링크 → 24px → **primary 버튼 "로그인"(h 48px 초록)** → 16px → 구분선(1px border, 가운데 "또는" label) → 16px → 소셜/간편 로그인 secondary 버튼 2개(세로, 각 h 48px, 좌측 아이콘) → 24px → 하단 "아직 회원이 아니세요? 회원가입" label 중앙(가입 부분 `--color-primary`).
- 에러: 실패 시 비밀번호 필드 아래 헬퍼 텍스트 §8 카피, border `--color-danger`.

### screen-5 마이페이지 (MY)

- 목적: 계정·활동·설정을 밀도 높은 리스트 서랍으로.
- 위→아래: GNB(타이틀 "MY" + 우측 설정 기어 24px) → 16px → 프로필 카드(§6.3: 아바타 56px + 이름 title-3 + 이메일 label sub + 우측 "프로필 편집" secondary 버튼 sm) → 16px → **포인트/활동 요약**(2~3열: 각 num-lg 숫자 + label "포인트"/"쿠폰"/"찜", 세로 구분선 1px) → 24px → 섹션 "내 활동"(title-2) → 리스트 그룹(§6.4, 1px border 구분): 최근 본 상품 / 구독한 채널 / 저장한 글 (각 아이콘 24px + 라벨 body-1 + 우측 카운트 label + 셰브론) → 24px → 섹션 "설정" 리스트: 알림 설정 / 다크 모드 토글(51×31 radius full) / 로그인 기기 관리 / 고객센터 → 24px → "로그아웃" ghost 버튼 → 탭바.

## §10. 금지 규칙 (Anti-AI-look)

**공통 금지** (AI가 흔히 저지르는 실수 → 대신 할 것):
1. 보라→파랑 그라데이션 히어로 → Jade에 그라데이션은 존재하지 않는다. 단색 면 + 얇은 선만. (브랜드 초록에 그라데이션 적용은 특히 금지.)
2. 모든 카드에 동일 그림자 → 카드는 `--shadow-0` + 1px border로 구분. 그림자는 떠 있는 것(드롭다운·시트·토스트·sticky 바)에만.
3. 3열 아이콘+제목+설명 카드 반복 → 최대 2열 콘텐츠 카드. 상품 그리드만 예외(§4).
4. `border: 1px solid #eee` 남발이 아니라 **`--color-border` 토큰 1종으로 통일** → Jade는 border를 쓰지만 색·굵기를 뒤섞지 않는다(1px `--color-border`, 강조는 2px `--color-border-strong`/`--color-primary`만).
5. 이모지를 아이콘 대신 사용 → 아이콘은 24px 인라인 SVG(stroke 1.8px 또는 fill)만.
6. 화면마다 다른 radius → §5 스케일 6값만, 인터랙티브는 4~8px.

**Jade 고유 금지 (P1~P8):**
1. **P1 브랜드 초록 배경 남용 금지** → 초록으로 큰 면적(히어로 배너·섹션 배경)을 칠하지 않는다. 초록은 CTA 버튼·검색바 테두리·아이콘·강조 점·활성 인디케이터에만. 배경은 흰색/`--color-surface`.
2. **P2 밝은 브랜드 초록(#03C75A)을 텍스트/액션에 쓰기 금지(라이트)** → 그건 그래픽 전용(대비 2.25:1). 버튼·링크는 `--color-primary`(#007A3D).
3. **P3 억지 여백으로 성기게 만들기 금지** → 포털은 정보 밀도가 정체성. 피드 아이템 사이 32~48px 여백, 카드 하나당 한 화면 같은 저밀도 레이아웃 금지. 8~16px 리듬 + 1px 구분선으로 촘촘하게.
4. **P4 자동재생 캐러셀/전면 히어로 배너 금지** → 홈 상단은 검색바가 차지한다. 큰 자동 슬라이드 배너로 검색을 밀어내지 않는다.
5. **P5 hover 전용 인터랙션 금지** → 모바일 퍼스트. 모든 인터랙션에 press(bg 하이라이트 + scale 0.98) 필수. hover는 데스크톱 보너스.
6. **P6 격식체·시스템 말투 금지** → "~하십시오", "처리되었습니다", 에러 코드 노출 전부 금지. §8 표의 해요체 정보형만.
7. **P7 과장된 스프링/바운스 모션 금지** → Jade는 절제된 포털. `cubic-bezier(0.34,1.56,...)` 같은 오버슈트 easing, 큰 scale 튐, 화면 슬라이드 전환 금지. 100~220ms, 감속 easing만.
8. **P8 한 화면 primary CTA 2개 이상 금지** → primary(초록) 버튼은 화면당 1개. 보조 액션은 secondary(테두리)/ghost로 강등. 검색 버튼과 폼 CTA가 한 화면에 동시에 초록 채움으로 경합하지 않게 한다.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 불러온 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/16-jade/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-soft: var(--color-primary-soft);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --font-sans: var(--font-family);
  --ease-standard: var(--ease-standard);
  --ease-out: var(--ease-out);
}
```

```tsx
// 검색바 — Jade 시그니처(초록 2px 테두리 + 우측 초록 버튼)
export function SearchBar(props: { placeholder?: string }) {
  return (
    <form className="flex h-12 items-center rounded-[6px] border-2 border-primary bg-surface-raised
                     focus-within:shadow-[0_1px_3px_rgba(20,22,26,0.10)]">
      <input
        className="min-w-0 flex-1 bg-transparent px-3 text-[16px] text-text
                   placeholder:text-[--color-text-tertiary] outline-none"
        placeholder={props.placeholder ?? "검색어를 입력하세요"}
      />
      <button aria-label="검색"
        className="grid h-12 w-12 place-items-center rounded-r-[4px] bg-primary text-white
                   transition-transform duration-100 ease-standard active:scale-[0.98]">
        {/* 24px 돋보기 SVG */}
      </button>
    </form>
  );
}

// 뉴스 피드 아이템 (밀도형, 1px 구분선)
export function FeedItem({ title, summary, source, time, thumb }: FeedItemProps) {
  return (
    <article className="flex gap-3 border-b border-border py-3 transition-transform
                        active:scale-[0.98] active:bg-surface">
      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] font-bold text-text line-clamp-2">{title}</h3>
        <p className="mt-1 text-[14px] text-text-sub line-clamp-2">{summary}</p>
        <p className="mt-1 text-[13px] text-text-tertiary tabular-nums">{source} · {time}</p>
      </div>
      {thumb && <img src={thumb} alt="" className="size-20 rounded-[4px] object-cover" />}
    </article>
  );
}
```

**StyleSeed 호환 메모:** tokens.css의 `--color-*` / `--radius-*` / `--motion-*` / `--ease-*`는 StyleSeed theme.css의 동명 슬롯에 1:1로 옮겨진다. 모션 시드는 "Snap" 계열(즉각적·짧은 감속, 오버슈트 없음)에 대응. `--font-size-*` 10단계는 StyleSeed type scale의 display/title/body/label/caption/numeric 슬롯에 매핑한다. accent(브랜드 초록)는 "graphic-only" 플래그로 표시해 텍스트 슬롯에서 배제한다.

## §12. 채점 루브릭

합격선: **verifiable 9항목 전부 통과(65점 만점 중 65점) + subjective 5항목 평균 4.0 이상**.
하나라도 미달이면 불합격 — loop-runner는 미달 항목만 고쳐 재채점한다.
판정 대상 파일 집합을 `$F`(html/css/tsx 글롭)로 표기한다.

### verifiable 항목 (기계 판정, 65점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율: 실제 사용된 bg/text·surface/text·primary/primary-text·primary(링크)/bg 쌍 4.5:1 이상. accent는 라이트에서 텍스트로 쓰이지 않았는지 확인 | 10 | 결과물 hex 추출 후 WCAG 공식(`L=0.2126R'+0.7152G'+0.0722B'`, c'=c/12.92 if c≤0.03928 else ((c+0.055)/1.055)^2.4, `CR=(L1+0.05)/(L2+0.05)`)으로 §2.3 표와 대조. 토큰 무변경 사용 시 §2.3 표 인용으로 통과. `--color-accent`/#03C75A가 `color:`(텍스트)에 라이트에서 쓰이면 0점 |
| V2 | 스페이싱 스케일 외 값 0개 | 10 | `grep -rhoE '(margin\|padding\|gap\|inset)[a-z-]*:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(0\|2\|4\|8\|12\|16\|20\|24\|32\|40\|48\|64)px'` → 0줄 |
| V3 | 타입 스케일 외 font-size 0개 | 10 | `grep -rhoE 'font-size:\s*[0-9.]+(px\|rem\|em)' $F \| grep -vwE ':\s*(12\|13\|14\|15\|16\|18\|20\|22\|26\|28)px'` → 0줄 (rem/em 사용 자체가 위반) |
| V4 | radius가 §5 스케일 값만 | 5 | `grep -rhoE 'border-radius:[^;]+' $F \| grep -oE '[0-9]+px' \| grep -vwE '(4\|6\|8\|12\|16\|999)px'` → 0줄 |
| V5 | shadow가 §5 표 4단계와 일치 | 5 | `grep -rhoE 'box-shadow:[^;]+' $F` 의 모든 값이 `var(--shadow-[0-3])` 참조이거나 tokens.css의 `--shadow-*` 정의 문자열과 일치 → 불일치 0건 |
| V6 | `prefers-reduced-motion` 대응 존재 | 5 | `grep -rl 'prefers-reduced-motion' $F \| wc -l` ≥ 1 |
| V7 | 외부 리소스 0 (CDN 폰트/스크립트/이미지) | 5 | `grep -rnE 'https?://[^"'"'"')( ]+\.(css\|js\|woff2?\|ttf\|png\|jpe?g\|webp\|svg)\|fonts\.googleapis\|cdn\.\|unpkg\|jsdelivr' $F` → 0줄 |
| V8 | press 물성: 절제된 press 존재 + 오버슈트 easing 부재 | 10 | `grep -rF 'scale(0.98)' $F \| wc -l` ≥ 1 **그리고** `grep -rE 'cubic-bezier\(0\.34,\s*1\.56\|cubic-bezier\([^)]*1\.[5-9]' $F \| wc -l` = 0 (오버슈트/바운스 easing 금지, §10 P7) |
| V9 | border 질서 + 수치 tabular-nums | 5 | 카드/리스트 구분에 border 사용: `grep -rE 'border[^;]*var\(--color-border' $F \| wc -l` ≥ 1 **그리고** `grep -r 'tabular-nums' $F \| wc -l` ≥ 1 |

### subjective 항목 (AI/사람 채점, 5점 척도 ×5항목 — 평균 4.0 이상 합격)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 (검색 주인공·초록 액션·밀도) | 검색이 안 보이거나 초록이 배경으로 크게 칠해져 있다 | 검색바는 있으나 밋밋하고, 밀도가 낮아 성긴 SaaS처럼 보인다 | 초록 테두리 검색바가 상단을 지배하고, 흰 배경에 정보가 촘촘하며 초록은 액션에만 있다 |
| S2 | §8 어조 준수 (정보형 해요체) | "처리되었습니다"류 격식체 또는 에러 코드 노출 | 해요체이나 과장된 감탄/이모지가 섞이거나 시스템 주어 문장 혼재 | 전 카피가 담백한 해요체, 에러가 [상황+다음 행동] 구조, 이모지 없이 신뢰감 있다 |
| S3 | 모션 절제 (§7) | 모션 없음 또는 반대로 스프링/바운스가 튄다 | press는 있으나 진입/전환이 과하거나 duration이 320ms 초과 | 누르면 조용히 눌리고 100~220ms 감속으로 정착, 오버슈트·슬라이드 전환 없음 |
| S4 | 밀도와 질서 (§4·§5 border 리듬) | 요소가 성기거나, 반대로 색·굵기 다른 선이 뒤섞여 지저분 | 밀도는 적당하나 border 종류가 혼용되거나 섹션 리듬(24px)이 불규칙 | 1px `--color-border` 한 종류와 8~24px 리듬으로 촘촘한데도 위계가 또렷하다 |
| S5 | §10 정성 항목 (초록 남용·CTA 수·그라데이션) | 그라데이션 초록 배너 또는 primary CTA 2개 이상 | 금지 위반은 없으나 초록 면적이 넓거나 자동 캐러셀이 있다 | 초록은 CTA·테두리·아이콘에만, 화면당 CTA 1개, 흰 배경/회색 선이 지배적 |

**채점 절차:** verifiable은 판정 명령을 그대로 실행해 pass/fail 기록 → subjective는 5화면을 라이트/다크 각각 확인해 앵커와 대조, 1~5점 부여 → 합산. 4.0 미만 항목은 5점 앵커 조건을 수정 지시문으로 변환해 다음 반복에 넘긴다.
