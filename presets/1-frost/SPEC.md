---
number: 1
codename: Frost
inspired-by: Microsoft Fluent 2 — 서술 참조만, 상표는 파일/클래스명에 사용하지 않음. 본 스펙의 모든 값은 독립 해석이며 공식 값이 아니다.
mood: 차분하고 신뢰감 있는 프로덕티비티. 반투명 아크릴 표면, 부드러운 빛과 그림자, 4px 그리드의 절제된 밀도
best-for: 팀 협업 툴, 문서/캘린더 등 오피스형 웹앱, 사내 생산성 도구, B2B SaaS
variants: [a, b]
status: complete
---

# 1 · Frost

## §1. 첫인상 요약

1. "회사에서 매일 쓰는 익숙한 도구" — 화려하지 않고, 배우지 않아도 손이 가는 화면.
2. 연한 회청색 캔버스(#F3F5F8) 위에 흰 표면이 얇은 그림자(shadow-2)와 1px 테두리로 떠 있다.
3. 앱바·패널 등 고정 표면은 반투명 아크릴(backdrop-filter blur 20px)로 뒤 콘텐츠가 은은히 비친다.
4. 파랑(#0F6CBD)은 행동 유도에만 아껴 쓰고, 나머지는 무채색 — 화면당 파랑 면적 10% 이하.
5. 모션은 150~250ms의 짧은 감속 — "반응했다"는 확인만 주고 사라진다. 과시하지 않는다.

## §2. 색

### 2.1 팔레트 (시맨틱 토큰 전체)

| 토큰 | 라이트 (a) | 다크 (a) | 용도 |
|---|---|---|---|
| `--color-bg` | `#F3F5F8` | `#1F2227` | 페이지 캔버스 |
| `--color-surface` | `#FFFFFF` | `#2A2E34` | 카드·패널·입력 배경 |
| `--color-surface-2` | `#EBEEF2` | `#33383F` | 표면 위 2단 레이어(코드블록, 선택 hover) |
| `--color-text` | `#1B1E23` | `#F2F4F7` | 본문·헤딩 |
| `--color-text-sub` | `#55595F` | `#A8ADB6` | 보조 텍스트, 타임스탬프, 라벨 |
| `--color-primary` | `#0F6CBD` | `#479EF5` | 주 행동 버튼, 활성 탭, 선택 표시 |
| `--color-primary-hover` | `#0B5CA3` | `#62ABF5` | primary hover |
| `--color-primary-pressed` | `#0A4E8A` | `#2E8EE8` | primary pressed |
| `--color-primary-text` | `#FFFFFF` | `#0B1A2E` | primary 위 텍스트 |
| `--color-primary-subtle` | `#E4F0FB` | `#1C2E45` | 선택된 리스트 행, 활성 칩 배경 |
| `--color-accent` | `#0A6E8A` | `#58C5DF` | 링크 외 강조(뱃지, 그래프 보조) |
| `--color-danger` | `#C42B1C` | `#F1707B` | 오류 텍스트·파괴적 행동 |
| `--color-danger-subtle` | `#FBEAE8` | `#3B2225` | 오류 배경 |
| `--color-success` | `#0E700E` | `#54B054` | 성공 텍스트·상태 점 |
| `--color-success-subtle` | `#E7F2E7` | `#20301F` | 성공 배경 |
| `--color-border` | `#D5D9DF` | `#3D424A` | 표면 테두리, 구분선 |
| `--color-focus` | `#1B1E23` | `#FFFFFF` | 포커스 링 (2px, offset 1px) |
| `--color-scrim` | `rgba(27,30,35,0.4)` | `rgba(0,0,0,0.55)` | 모달 뒤 스크림 |
| `--acrylic-bg` | `rgba(255,255,255,0.72)` | `rgba(42,46,52,0.72)` | 아크릴 표면 배경 |
| `--acrylic-border` | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.08)` | 아크릴 표면 1px 테두리 |

아크릴 공통: `backdrop-filter: blur(20px) saturate(150%)`. 미지원 브라우저 폴백은 `--color-surface` 불투명 배경(`@supports not (backdrop-filter: blur(20px))`).

### 2.2 라이트/다크

- 라이트가 기본. 다크는 `[data-theme="dark"]`로 전 토큰 오버라이드 완비 (위 표 참조).
- 다크에서 순수 검정 `#000000` 표면 금지 — 최저 명도는 `--color-bg #1F2227`.
- 다크의 primary는 밝은 파랑(#479EF5) + **어두운 텍스트**(#0B1A2E) 조합. 라이트의 "진한 파랑+흰 글자"를 다크에 그대로 복사하지 않는다.
- 다크에서 그림자는 alpha를 높이고(§5), 표면 위계는 그림자보다 배경 명도 차(bg → surface → surface-2)로 표현한다.

### 2.3 대비 규칙 — 실측값

기준: 본문 텍스트 4.5:1 이상, 대형 텍스트(20px+)·UI 요소 3:1 이상 (WCAG 상대휘도 공식으로 계산).
아래는 이 스펙 확정 색의 **실제 계산값** — 전부 4.5:1 이상으로 본문 기준까지 통과.

| 쌍 | 라이트 | 다크 |
|---|---|---|
| bg / text | **15.30:1** | **14.48:1** |
| surface / text | **16.71:1** | **12.39:1** |
| surface / text-sub | **7.05:1** | **6.06:1** |
| primary / primary-text | **5.38:1** | **6.22:1** |
| primary-hover / primary-text | **6.83:1** | **7.21:1** |
| primary-pressed / primary-text | **8.50:1** | **5.12:1** |
| surface / danger | **5.66:1** | **4.77:1** |
| surface / success | **6.28:1** | **5.01:1** |
| surface / accent | **5.82:1** | **6.80:1** |

추가 제약:
- primary 위 텍스트는 라이트에서 항상 `#FFFFFF`, 다크에서 항상 `#0B1A2E` — 다른 색 금지.
- `--color-text-sub`는 12px 캡션에도 쓰이므로 4.5:1 미만이면 색 자체를 폐기한다.
- 아크릴 표면 위 텍스트는 **가장 불리한 배경(blur 뒤 흰색/검정)** 기준으로 계산해 통과해야 한다. 실전 판정: 아크릴의 불투명 폴백 색(surface) 기준 계산으로 갈음.
- border(1.42:1)는 장식이므로 대비 요건 없음. 단 입력 필드처럼 경계가 의미를 갖는 곳은 하단 보더를 `--color-text-sub`(3:1 이상)로 강화한다(§6.2).

### 2.4 팔레트 생성 규칙 (변형·랜덤용)

**고정 (불변식)**
- 뉴트럴 구조 전체: bg/surface/surface-2/text/text-sub/border/scrim/acrylic은 어떤 변형에서도 그대로. 뉴트럴에 primary hue 틴트를 섞지 않는다(회청 톤 유지).
- danger/success 계열 고정 (라이트 `#C42B1C`/`#0E700E`, 다크 `#F1707B`/`#54B054`).
- 라이트 primary: HSL 채도 S 70~90%, 명도 L 30~42% — 흰 텍스트와 4.5:1 이상이 나오는 구간.
- 다크 primary: 같은 hue에서 S 55~90%, L 55~70% — 어두운 텍스트(`#0B1A2E`급, L≤12%)와 4.5:1 이상.
- `-subtle` 색: 라이트 = primary hue 유지, S 40~60%, L 92~95%. 다크 = hue 유지, S 35~55%, L 16~22%.

**자유**
- primary hue 0~360 자유. accent는 primary hue ±20~40° 이내에서 선택(동일 hue 금지 — 구분 가능해야 함).
- hover = 같은 hue에서 L −6%p(라이트) / +5%p(다크), pressed = L −12%p(라이트) / −8%p(다크). 대비 재검증 필수.

**랜덤 명명**: 규칙 안에서 hue를 뽑아 `1-r<hue>`로 명명 (예: `1-r212` = hue 212). 같은 이름 = 항상 같은 색(재현성). §2.3 계산을 통과 못 하는 조합은 폐기 후 다시 뽑는다.

**변형 b (등록됨)**: hue 166 틸 계열. 라이트 primary `#0C6B57`(vs 흰 텍스트 **6.45:1**), hover `#0A5A49`(8.17:1), pressed `#084A3C`(10.22:1), subtle `#E2F1EC`. 다크 primary `#4FD3B0`(vs `#0A231C` **8.88:1**), hover `#6FDCBE`(9.97:1), pressed `#38BD9A`(7.02:1), subtle `#12332A`, primary-text `#0A231C`. accent는 a와 동일(`#0A6E8A`/`#58C5DF`, 166°+28°=194° 이내).

## §3. 타이포그래피

**폰트 스택** (외부 로드 금지 — 시스템 폰트만):

```css
--font-sans: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
             system-ui, "Segoe UI", "Malgun Gothic", sans-serif;
--font-mono: "Cascadia Code", "SF Mono", Consolas, "D2Coding", monospace;
```

**타입 스케일** — 아래 8단계 외 font-size 사용 금지:

| 이름 | size / line-height | weight | letter-spacing | 용도 |
|---|---|---|---|---|
| `caption` | 12px / 16px | 400 | 0 | 타임스탬프, 뱃지, 보조 라벨 |
| `body` | 14px / 20px | 400 | 0 | 기본 본문, 리스트, 입력값 |
| `body-strong` | 14px / 20px | 600 | 0 | 리스트 제목, 버튼, 탭 라벨 |
| `subtitle` | 16px / 22px | 600 | 0 | 카드 제목, 모달 제목 |
| `title-3` | 20px / 28px | 600 | -0.01em | 섹션 헤딩 |
| `title-2` | 24px / 32px | 600 | -0.01em | 페이지 제목(모바일) |
| `title-1` | 28px / 36px | 600 | -0.02em | 페이지 제목(데스크톱) |
| `display` | 40px / 52px | 600 | -0.02em | 통계 숫자, 빈 상태 헤드라인 |

**위계 규칙**
- 한 화면에 헤딩 레벨 최대 3개 (예: title-2 + subtitle + body-strong). display는 화면당 1회.
- 기본 크기는 14px — 16px가 아니다. 밀도 있는 업무 도구의 기준선.
- weight는 400/600 두 개만. 700(bold)·300(light) 금지. 강조는 weight 600 또는 색(`--color-text` vs `--color-text-sub`)으로.
- 숫자(카운트, 통계): `font-variant-numeric: tabular-nums` 필수. 큰 통계는 `display` + weight 600.
- 본문 최대 폭 72ch(문서 편집 화면 본문 영역).

## §4. 간격 · 레이아웃

**스페이싱 스케일** (4px 그리드) — 이 값 외 사용 금지:

```
4  8  12  16  20  24  32  40  48  64  (px)
```

- **컨테이너**: 데스크톱 최대 폭 1280px 중앙 정렬. 문서 본문 영역은 720px.
- **그리드**: 모바일(390px 기준) 1열, 좌우 패딩 16px. 데스크톱(1024px+) 12컬럼, gutter 24px, 좌우 패딩 32px.
- **앱 셸(데스크톱)**: 좌측 사이드바 260px(아크릴) + 본문. 상단 앱바 높이 48px(아크릴, sticky).
- **모바일 셸**: 상단 앱바 48px + 하단 탭바 56px(+ safe-area). 본문 스크롤 영역은 그 사이.
- **리듬**: 섹션 간 32px(모바일)/48px(데스크톱), 카드 사이 12px, 카드 내부 패딩 16px(모바일)/20px(데스크톱), 리스트 행 내부 상하 12px 좌우 16px, 라벨↔입력 4px, 입력↔입력 16px.
- **터치 타깃**: 최소 44×44px (시각 크기가 작아도 히트 영역 확보 — 예: 32px 아이콘 버튼에 `padding` 보정).
- **하단 고정 CTA**: 문서 편집·설정 저장 등에서만 사용. 높이 44px 버튼 + 상하 12px 패딩, `padding-bottom: calc(12px + env(safe-area-inset-bottom))`.
- **밀도**: 리스트 행 높이 44px(모바일)/40px(데스크톱 마우스 환경). 테이블 행 40px.

## §5. 형태 (Shape)

**radius 스케일** — 이 값 외 사용 금지:

| 토큰 | 값 | 적용처 |
|---|---|---|
| `--radius-sm` | 2px | 체크박스, 인라인 코드 |
| `--radius-md` | 4px | 버튼, 입력, 칩, 메뉴 아이템, 툴팁 |
| `--radius-lg` | 8px | 카드, 패널, 드롭다운, 토스트, 썸네일 |
| `--radius-xl` | 12px | 모달, 바텀시트(상단 모서리만) |
| `--radius-full` | 9999px | 아바타, 상태 점, 토글 스위치 |

- **border**: 표면 요소(카드/입력/메뉴)는 기본 `1px solid var(--color-border)`. 그림자와 함께 쓰되 §10의 레벨 규칙을 지킨다. 구분선도 동일 1px — 2px 이상 장식 보더 금지.
- **shadow/elevation 단계** (2겹 구조: 근접 윤곽 + 방향성 부드러운 빛):

| 토큰 | 라이트 값 | 다크 값 | 적용처 |
|---|---|---|---|
| `--shadow-2` | `0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)` | `0 0 2px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.28)` | 카드(휴지 상태), 입력 |
| `--shadow-4` | `0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)` | `0 0 2px rgba(0,0,0,0.24), 0 2px 4px rgba(0,0,0,0.28)` | 카드 hover, 버튼 hover |
| `--shadow-8` | `0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)` | `0 0 2px rgba(0,0,0,0.24), 0 4px 8px rgba(0,0,0,0.28)` | 드롭다운, 팝오버, 토스트 |
| `--shadow-16` | `0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)` | `0 0 2px rgba(0,0,0,0.24), 0 8px 16px rgba(0,0,0,0.28)` | 사이드 패널, 바텀시트 |
| `--shadow-28` | `0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.24)` | `0 0 8px rgba(0,0,0,0.28), 0 14px 28px rgba(0,0,0,0.48)` | 모달 |

elevation은 의미 위계다: 같은 화면에서 같은 역할 요소는 같은 단계. "모든 카드에 shadow-8" 같은 균일 적용 금지(§10).

## §6. 핵심 컴포넌트 규칙

공통 상태 규칙: hover는 배경/그림자 1단계 상승(150ms), press는 배경 1단계 하강 + `transform: scale(0.98)` 없음(Frost는 스케일 변형 안 씀), disabled는 `opacity: 0.4` + `cursor: not-allowed`, focus-visible은 `outline: 2px solid var(--color-focus); outline-offset: 1px`.

### 6.1 버튼

- 치수: 높이 32px(데스크톱 기본)/40px(모바일·강조), 좌우 패딩 16px, radius 4px, 폰트 body-strong(14px/600). 아이콘+텍스트 간격 8px, 아이콘 20px.
- **primary**: `background: var(--color-primary); color: var(--color-primary-text); border: none;` hover→`--color-primary-hover`, press→`--color-primary-pressed`.
- **secondary**: `background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-border); box-shadow: var(--shadow-2);` hover→배경 `--color-surface-2`.
- **ghost**: 배경·보더 없음, `color: var(--color-text)`. hover→배경 `--color-surface-2`. 툴바·행 내 액션 전용.
- 화면당 primary 버튼 1개 원칙.

```css
.btn { height: 32px; padding: 0 16px; border-radius: var(--radius-md);
  font: 600 14px/20px var(--font-sans); display: inline-flex; align-items: center; gap: 8px;
  transition: background var(--motion-fast) var(--ease-fluent), box-shadow var(--motion-fast) var(--ease-fluent); }
.btn-primary { background: var(--color-primary); color: var(--color-primary-text); border: none; }
.btn-primary:hover { background: var(--color-primary-hover); }
.btn-primary:active { background: var(--color-primary-pressed); }
```

### 6.2 입력 필드

- 높이 32px(데스크톱)/40px(모바일), 좌우 패딩 12px, radius 4px, `background: var(--color-surface)`, `border: 1px solid var(--color-border)`, **하단 보더만 강조**: `border-bottom-color: var(--color-text-sub)`.
- focus: 하단 보더가 `--color-primary` 2px로 (레이아웃 밀림 방지: `border-bottom-width: 2px; padding-bottom: -1px` 대신 `box-shadow: inset 0 -2px 0 var(--color-primary)` 사용).
- 라벨: caption(12px) `--color-text-sub`, 입력 위 4px. 오류: 하단 강조가 `--color-danger`, 아래 caption 오류 문구.

### 6.3 카드

- `background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-2); padding: 16px` (데스크톱 20px).
- 클릭 가능 카드만 hover 시 `--shadow-4` + `border-color: var(--color-text-sub)`. 정적 카드는 hover 반응 금지.
- 카드 안에 카드 금지 — 내부 구획은 1px 구분선으로.

### 6.4 리스트 아이템

- 행 높이 44px(모바일)/40px(데스크톱), 좌우 패딩 16px, 구조: [아바타/아이콘 20px] – 12px – [제목 body-strong + 보조 caption] – auto – [메타 caption / 액션 ghost 버튼].
- hover: `background: var(--color-surface-2)`. 선택됨: `background: var(--color-primary-subtle)` + 좌측 3px×20px 파랑 인디케이터 바(`--color-primary`, radius-full).
- 구분선은 좌측 들여쓰기 정렬(콘텐츠 시작선부터). 전체 폭 구분선 남발 금지.

### 6.5 상단 네비/앱바

- 높이 48px, 아크릴(`background: var(--acrylic-bg); backdrop-filter: blur(20px) saturate(150%); border-bottom: 1px solid var(--color-border)`), `position: sticky; top: 0`.
- 구조: [뒤로/햄버거 44px 히트] – [제목 subtitle, 1줄 말줄임] – auto – [아이콘 버튼 최대 2개 + 아바타 28px].

### 6.6 하단 탭바 (모바일)

- 높이 56px + `env(safe-area-inset-bottom)`, 아크릴 배경 + 상단 1px 보더. 탭 4~5개, 각 탭 = 아이콘 20px + caption 라벨, 세로 스택 간격 4px.
- 활성: 아이콘·라벨 `--color-primary` + weight 600. 비활성: `--color-text-sub`. 인디케이터 바·배경 필 금지 — 색만으로 구분.

### 6.7 모달 / 바텀시트

- 데스크톱 모달: 폭 480px, radius 12px, `--shadow-28`, 패딩 24px, 제목 subtitle. 뒤에 `--color-scrim`.
- 모바일 바텀시트: 상단 radius 12px 12px 0 0, `--shadow-16`, 상단 그랩바 32×4px(`--color-border`, radius-full, 상단 8px), 내용 패딩 16px, 하단 safe-area.
- 버튼 배치: 우측 정렬, [ghost 취소] – 8px – [primary 확인]. 파괴적 확인은 primary 대신 danger 배경.

### 6.8 토스트

- 하단 중앙(모바일)/우하단(데스크톱), 폭 최대 360px, radius 8px, `--shadow-8`, 아크릴 배경, 패딩 12px 16px, 구조: [상태 아이콘 20px] – 12px – [body 텍스트] – [ghost 액션(선택)].
- 지속 4초, 진입 250ms 슬라이드+페이드(§7), 동시 1개(새 토스트가 기존 것 교체).

### 6.9 뱃지 / 칩

- 뱃지(읽기 전용): 높이 20px, 패딩 0 8px, radius 4px, caption(12px), `background: var(--color-surface-2); color: var(--color-text-sub)`. 상태 뱃지는 `-subtle` 배경 + 본색 텍스트 (예: 성공 = `--color-success-subtle` + `--color-success`).
- 칩(선택 가능): 높이 28px, 패딩 0 12px, radius 4px, 1px 보더. 선택: `--color-primary-subtle` 배경 + `--color-primary` 텍스트 + 보더 `--color-primary`.
- 숫자 카운트 점: 16px 원(radius-full), `--color-danger` 배경 + 흰 caption.

### 6.10 빈 상태 (empty state)

- 구조(세로 중앙): [인라인 SVG 일러스트 64×64px, `--color-border` 선화 + `--color-primary-subtle` 면] – 16px – [subtitle 제목] – 4px – [body `--color-text-sub` 설명 1줄] – 16px – [secondary 버튼 1개].
- 외부 이미지·이모지 대체 금지. 설명은 §8 어조로 "다음 행동"을 알려준다.

## §7. 모션

**성격 한 줄**: 짧고 기능적인 감속 — 도착을 알리고 즉시 물러난다. 스프링·바운스·과장 없음.

**토큰**:

```css
--motion-fast: 150ms;    /* hover, press, 색/그림자 전환 */
--motion-base: 200ms;    /* 드롭다운, 탭 전환, 토글 */
--motion-slow: 250ms;    /* 모달/시트 진입, 페이지 전환 */
--ease-fluent: cubic-bezier(0.33, 0, 0.67, 1);   /* 상태 전환 기본 */
--ease-decel: cubic-bezier(0.1, 0.9, 0.2, 1);    /* 진입 — 빠르게 출발, 부드럽게 도착 */
--ease-accel: cubic-bezier(0.7, 0, 1, 0.5);      /* 퇴장 — 미련 없이 가속 */
```

**패턴 규칙**

| 패턴 | 값 |
|---|---|
| 진입(모달/시트/팝오버) | 250ms `--ease-decel`, `translateY(16px)→0` + opacity 0→1 |
| 퇴장 | 150ms `--ease-accel`, 역방향. 진입보다 항상 짧게 |
| 페이지 전환 | 200ms 콘텐츠 영역만 `translateY(8px)`+페이드. 셸(앱바/탭바)은 고정 |
| hover / press | 150ms `--ease-fluent`, 배경·그림자·색만 (transform 금지) |
| 리스트 스태거 | 항목당 30ms 지연, 최대 8개까지만(240ms 상한), 각 200ms `--ease-decel` |
| 토글/체크 | 200ms `--ease-fluent`, thumb 이동 + 배경색 |

- duration은 위 3개 토큰 외 금지. 300ms 초과 애니메이션 금지.
- `prefers-reduced-motion: reduce` 대응 필수 — transform/스태거 제거, opacity 전환만 100ms로:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important;
    transition-duration: 100ms !important; transition-property: opacity, background-color, color !important; }
}
```

## §8. 보이스 & 톤 (마이크로카피)

- **어조**: 간결한 해요체 존댓말. 유능한 동료의 말투 — 친근하되 호들갑 없음. 이모지·느낌표 사용 금지(성공 토스트 포함).
- 문장은 한 호흡(≤40자). 버튼은 명사형/동사 원형("저장", "문서 만들기") — "~하기 클릭!" 금지.
- 시스템이 아니라 사용자가 주어: "저장했어요" ○ / "저장이 완료되었습니다" ✕.

| 상황 | 예시 |
|---|---|
| 버튼 레이블 | "저장" / "문서 만들기" / "팀원 초대" (2~6자 명사형) |
| 에러(입력) | "제목을 입력해 주세요" — 원인+행동, 코드번호·"오류 발생" 금지 |
| 에러(네트워크) | "연결이 불안정해요. 잠시 후 다시 시도해 주세요" |
| 빈 상태 | "아직 문서가 없어요" + "첫 문서를 만들어 보세요" |
| 로딩 | "불러오는 중…" (스켈레톤 우선, 문구는 3초 이상일 때만) |
| 성공 토스트 | "저장했어요" / "초대를 보냈어요" |
| 확인 다이얼로그 | 제목 "문서를 삭제할까요?" + 본문 "삭제하면 되돌릴 수 없어요" + [취소/삭제] |

**금지 표현**: "오류가 발생했습니다", "성공적으로 ~되었습니다", "환영합니다!", "죄송합니다"(원인 설명 없이), 물결표(~), "클릭하세요".

## §9. 레이아웃 레시피 — 데모 5화면

시나리오: 가상의 팀 협업 툴 **"모임(Moim)"**. 모든 화면은 390px 모바일 우선, 1280px 데스크톱 확장. 셸: 모바일 = 앱바 48px + 탭바 56px(홈/문서/일정/알림), 데스크톱 = 아크릴 사이드바 260px + 앱바 48px.

### screen-1 홈 피드 (팀 활동 스트림 + 빠른 작업)

- 목적: 오늘 팀에서 일어난 일을 30초 안에 파악하고 다음 행동으로 진입.
- 구성(위→아래): ① 앱바(팀명 subtitle + 검색·알림 아이콘) ② 인사 블록 — "오늘도 함께해요, 지연 님" body + 날짜 caption, 상하 24px ③ 빠른 작업 행 — 칩 4개 가로 스크롤("문서 만들기/일정 잡기/팀원 초대/파일 올리기"), 높이 28px, 간격 8px ④ 섹션 헤딩 title-3 "팀 활동" + 32px 위 여백 ⑤ 활동 스트림 — 리스트 아이템(§6.4) 8개: 아바타 20px + "박서준 님이 '2분기 계획'을 수정했어요" body + 타임스탬프 caption. 날짜 구분 헤더는 caption+구분선 ⑥ 스태거 진입(§7, 최대 8개).
- 데스크톱: 본문 2열 — 스트림 8컬럼 + 우측 4컬럼 "오늘 일정" 카드(§6.3).

### screen-2 문서 목록 (그리드/리스트 전환)

- 목적: 팀 문서를 훑고 정렬·전환하며 원하는 문서로 진입.
- 구성: ① 앱바(제목 "문서") ② 툴바 행(높이 40px) — 좌측 검색 입력(§6.2, 모바일 전폭), 우측 정렬 셀렉트 + 그리드/리스트 토글(ghost 아이콘 버튼 2개, 활성은 `--color-primary-subtle` 배경) ③ **리스트 모드**: 리스트 아이템 — 문서 아이콘 20px + 제목 body-strong + "박서준 · 2시간 전" caption ④ **그리드 모드**: 카드(§6.3) — 상단 미리보기 영역(높이 96px, `--color-surface-2` + 텍스트 라인 3개를 CSS로), 제목 body-strong, 메타 caption. 모바일 2열 gap 12px, 데스크톱 4열 gap 24px ⑤ 모드 전환은 200ms 페이드(레이아웃 애니메이션 금지) ⑥ 우하단 없음 — 새 문서 버튼은 툴바의 primary 1개.
- 빈 검색 결과: §6.10 빈 상태.

### screen-3 문서 편집 (툴바 + 본문 + 댓글 패널)

- 목적: 문서를 읽고 고치고 댓글로 협업.
- 구성: ① 앱바 — 뒤로 + 문서 제목(subtitle, 인라인 수정 가능) + "저장됨" 상태 caption + 공유 primary 버튼(데스크톱) ② 서식 툴바(높이 40px, 아크릴, 앱바 아래 sticky) — ghost 아이콘 버튼들(B/I/제목/리스트/링크, 20px 아이콘, 44px 히트), 그룹 간 1px 세로 구분선 + 8px 여백 ③ 본문 — 최대 폭 720px 중앙, 좌우 패딩 16px, 문단 간 16px, 제목 title-3, `body` 16px 예외 없음: 본문도 body(14px)/데스크톱 문서 본문만 subtitle급 16px 허용 ④ 댓글: 데스크톱 = 우측 320px 패널(1px 좌측 보더), 모바일 = 하단 바텀시트(§6.7). 댓글 = 아바타 24px + 이름 body-strong + 시각 caption + 본문 body, 항목 간 16px ⑤ 하단 고정 댓글 입력(모바일): 입력 40px + 전송 primary 32px, safe-area 처리.
- 아크릴 사용처는 앱바+서식 툴바 2곳 — 상한(§10) 준수.

### screen-4 일정 (주간 캘린더)

- 목적: 팀의 한 주를 조망하고 빈 시간을 찾는다.
- 구성: ① 앱바(제목 "일정" + "오늘" secondary 버튼 + 주 이동 ghost 화살표 2개) ② 주 헤더 행 — 7열, 요일 caption + 날짜 body-strong, 오늘은 28px 원형 `--color-primary` 배경+`--color-primary-text` ③ 모바일: 선택한 하루의 타임라인(시간 축 caption 60px 폭 + 이벤트 블록), 데스크톱: 7열 주간 그리드(열 간 1px 보더, 시간 행 48px) ④ 이벤트 블록 — radius 4px, `--color-primary-subtle` 배경 + 좌측 3px `--color-primary` 바 + body-strong 제목 + caption 시간, 패딩 4px 8px. 캘린더/종류별 색은 accent·success의 `-subtle` 변형만 ⑤ 현재 시각선 — 1px `--color-danger` 가로선 + 좌측 8px 원 ⑥ 새 일정: 앱바 우측 primary "일정 추가" → 모달(§6.7).

### screen-5 알림 설정 (토글 그룹)

- 목적: 알림 채널·유형을 끄고 켠다. 저장 버튼 없는 즉시 반영형.
- 구성: ① 앱바(뒤로 + "알림 설정") ② 설정 그룹 카드 2~3개(§6.3, 카드 간 12px), 그룹 제목 subtitle + 설명 caption ③ 각 행(높이 44px): 좌측 [라벨 body + 보조 설명 caption] + 우측 토글 스위치 — 트랙 40×20px radius-full, thumb 16px, off `--color-border` 트랙/on `--color-primary` 트랙, 전환 200ms(§7) ④ 행 간 구분선(들여쓰기 정렬) ⑤ 그룹 전체 끄기 시 하위 행 `opacity: 0.4` + 토글 disabled ⑥ 변경 시 토스트 "알림 설정을 바꿨어요"(§6.8) ⑦ 최하단: "방해 금지 시간" 행 → 시간 선택 바텀시트.

## §10. 금지 규칙 (Anti-AI-look)

각 항목: AI가 흔히 하는 실수 → 대신 할 것.

**공통 금지**
1. 보라→파랑 그라데이션 히어로 → Frost에 그라데이션 배경 자체가 없다. 캔버스는 단색 `--color-bg`.
2. 모든 카드에 동일한 진한 그림자 → §5 표의 역할별 단계. 휴지 카드 shadow-2, 그 이상은 부유 요소만.
3. 아이콘+제목+설명 3열 카드 반복 → 기능은 리스트(§6.4)나 툴바로. 마케팅 카드 격자는 이 프리셋 용도가 아니다.
4. `border: 1px solid #eee` 남발 → 보더 색은 `--color-border` 토큰만. 리터럴 hex 보더 금지.
5. 이모지를 아이콘 대신 사용 → 20px 인라인 SVG(stroke 1.5px)만.
6. 화면마다 다른 radius → §5 스케일 외 값 금지. 버튼은 언제나 4px.

**Frost 고유 금지 (5+)**
7. **아크릴 남발** → `backdrop-filter`는 화면당 최대 2곳, 고정 표면(앱바·툴바·탭바·사이드바·토스트)만. 스크롤 콘텐츠(카드·리스트)에 아크릴 금지.
8. **필 버튼(pill)** → 버튼·입력 radius 9999px 금지. radius-full은 아바타·상태 점·토글·인디케이터 바만.
9. **파랑 과다** → primary 색 면적이 화면의 10%를 넘기지 않는다. 아이콘·헤딩·구분선까지 파랗게 칠하지 않는다 — 파랑은 "지금 누를 것"과 "선택된 것"에만.
10. **스케일·바운스 모션** → `transform: scale()` hover, 스프링 곡선, 300ms 초과 애니메이션 금지. §7의 3개 duration·3개 easing만.
11. **다크에서 순수 검정/순수 흰색** → `#000000` 표면, `#FFFFFF` 본문 텍스트 금지(포커스 링 제외). 다크 표면은 §2.1 값만.
12. **큼직한 여백의 마케팅 히어로** → 이것은 업무 도구다. 첫 화면 첫 스크롤 안에 실데이터(리스트/카드)가 보여야 한다. 중앙 정렬 대형 헤드라인+CTA 조합 금지.
13. **카드 내부 중앙 정렬** → 텍스트·버튼은 좌측 정렬 기본. 중앙 정렬은 빈 상태(§6.10)와 모달 내 일러스트만.

## §11. Tailwind v4 / React 매핑 (부록)

```css
/* app.css — tokens.css를 import한 뒤 Tailwind 토큰으로 매핑 */
@import "tailwindcss";
@import "../presets/1-frost/tokens.css";

@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-2: var(--color-surface-2);
  --color-text: var(--color-text);
  --color-text-sub: var(--color-text-sub);
  --color-primary: var(--color-primary);
  --color-primary-text: var(--color-primary-text);
  --color-primary-subtle: var(--color-primary-subtle);
  --color-accent: var(--color-accent);
  --color-danger: var(--color-danger);
  --color-success: var(--color-success);
  --color-border: var(--color-border);
  --font-sans: var(--font-sans);
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px; --radius-xl: 12px;
  --shadow-2: var(--shadow-2); --shadow-4: var(--shadow-4);
  --shadow-8: var(--shadow-8); --shadow-16: var(--shadow-16); --shadow-28: var(--shadow-28);
  --ease-fluent: var(--ease-fluent); --ease-decel: var(--ease-decel);
}
```

```tsx
// 버튼 (primary / secondary / ghost)
function Button({ variant = "secondary", ...props }: { variant?: "primary" | "secondary" | "ghost" } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = {
    primary: "bg-primary text-primary-text hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-pressed)]",
    secondary: "bg-surface text-text border border-border shadow-2 hover:bg-surface-2",
    ghost: "bg-transparent text-text hover:bg-surface-2",
  }[variant];
  return <button className={`inline-flex h-8 items-center gap-2 rounded-md px-4 text-sm font-semibold
    transition-colors duration-150 [transition-timing-function:var(--ease-fluent)]
    focus-visible:outline-2 focus-visible:outline-offset-1 disabled:opacity-40 ${styles}`} {...props} />;
}

// 리스트 아이템 (선택 상태 포함)
function ListItem({ selected, icon, title, meta }: { selected?: boolean; icon: React.ReactNode; title: string; meta: string }) {
  return <li className={`relative flex h-11 items-center gap-3 px-4 md:h-10
    ${selected ? "bg-primary-subtle" : "hover:bg-surface-2"}`}>
    {selected && <span className="absolute left-0 h-5 w-[3px] rounded-full bg-primary" />}
    <span className="size-5 shrink-0">{icon}</span>
    <span className="truncate text-sm font-semibold text-text">{title}</span>
    <span className="ml-auto text-xs text-text-sub">{meta}</span>
  </li>;
}
```

**StyleSeed 호환 메모**: tokens.css의 `:root` 블록을 그대로 theme.css로 복사 가능. 대응 — `--color-bg→background`, `--color-surface→card`, `--color-primary→primary`, `--color-text-sub→muted-foreground`, `--color-border→border`, `--radius-md→radius`. 아크릴 토큰(`--acrylic-*`)과 그림자 5단계는 StyleSeed 표준에 없으므로 커스텀 토큰으로 추가한다.

## §12. 채점 루브릭

loop-runner 합격 기준으로 그대로 사용한다. 대상: 이 프리셋을 따랐다고 주장하는 HTML/CSS 결과물(데모 또는 외부 적용물). 아래 grep은 대상 파일 전체(*.html, *.css)에 대해 실행.

### verifiable (기계 판정, 70점)

| # | 항목 | 배점 | 판정 방법 |
|---|---|---|---|
| V1 | 대비율 통과 | 10 | 사용된 (배경,전경) 쌍마다 WCAG 상대휘도 계산: L=0.2126R+0.7152G+0.0722B (c≤0.03928 ? c/12.92 : ((c+0.055)/1.055)^2.4), CR=(L1+0.05)/(L2+0.05). 본문 ≥4.5, 20px+·UI ≥3.0. §2.3 표의 쌍은 표 값과 ±0.1 일치해야 함 |
| V2 | 스페이싱 스케일 준수 | 10 | `grep -rnoE '(margin|padding|gap|top|left|right|bottom)[a-z-]*:\s*[^;]+' *.html *.css \| grep -oE '[0-9]+px' \| sort -u` 결과가 {0,1,2,3,4,8,12,16,20,24,28,32,40,48,64,…스케일 합성값} 외 0개. (1~3px는 보더/인디케이터만 허용) |
| V3 | 타입 스케일 준수 | 10 | `grep -rnoE 'font-size:\s*[0-9.]+(px\|rem)' *.html *.css` 결과가 {12,14,16,20,24,28,40}px 외 0개 |
| V4 | radius 준수 | 8 | `grep -rnoE 'border-radius:\s*[^;]+' *.html *.css` 의 값이 {0, 2px, 4px, 8px, 12px, 9999px 및 12px 12px 0 0 같은 조합} 외 0개 |
| V5 | shadow 준수 | 8 | `grep -rnoE 'box-shadow:\s*[^;]+' *.html *.css` 가 var(--shadow-*) 또는 §5 표의 리터럴/inset 포커스 표현 외 0개 |
| V6 | 모션 토큰 준수 | 8 | `grep -rnoE '[0-9.]+m?s' *.css *.html` (transition/animation 문맥) 값이 {100,150,200,250}ms·스태거 지연 {30,60,…240}ms 외 0개, cubic-bezier가 §7의 3종 외 0개 |
| V7 | reduced-motion 대응 | 5 | `grep -rl 'prefers-reduced-motion' *.css *.html` 이 화면 파일 전부를 포함 |
| V8 | 아크릴 상한 | 5 | 화면(HTML) 파일별 `grep -c 'backdrop-filter'` ≤ 2 (폴백 @supports 블록 제외), 대상은 sticky/fixed 요소만 |
| V9 | 외부 리소스 0 | 6 | `grep -rnE 'https?://' *.html *.css \| grep -vE 'xmlns\|w3\.org'` 결과 0줄. `grep -rn '@import url\|<link[^>]*http\|<img[^>]*http'` 0줄 |

V1~V9 각 항목 만점 아니면 0점 (부분 점수 없음). **verifiable 합격선: 70/70 전항목 통과.**

### subjective (AI/사람 채점, 각 1~5점, 30점 환산)

| # | 항목 | 1점 앵커 | 3점 앵커 | 5점 앵커 |
|---|---|---|---|---|
| S1 | §1 첫인상 부합 | 화려한 마케팅 사이트 같다. 그라데이션·대형 히어로·파랑 범벅 | 업무 도구로 보이지만 아크릴·그림자 위계가 어색한 곳이 2~3군데 | 스크린샷만 봐도 "차분한 오피스형 협업 툴". 파랑이 행동 유도에만 쓰였고 표면 위계가 한눈에 읽힘 |
| S2 | §8 어조 준수 | "성공적으로 저장되었습니다!" 류 기계 존댓말·이모지·느낌표 | 대체로 해요체지만 금지 표현이 1~2개 남음 | 전 카피가 해요체 40자 이내, 금지 표현 0, 에러가 원인+행동 구조 |
| S3 | 아크릴 품질 | blur 없는 반투명(비쳐서 글자가 안 읽힘) 또는 아크릴 없음 | 아크릴은 있으나 폴백 없음, 또는 스크롤 콘텐츠에 적용 | 고정 표면 1~2곳에만, blur 20px+saturate, @supports 폴백까지 |
| S4 | 밀도·위계 | 여백이 마케팅 사이트처럼 헐렁하거나 반대로 다닥다닥 | 4px 그리드는 지켰으나 섹션 리듬(32/48px)이 들쭉날쭉 | 첫 스크롤에 실데이터가 보이고, 리스트 행·카드 패딩·섹션 간격이 §4 값 그대로 |
| S5 | 다크 완성도 | 다크가 없거나 색 반전 수준(#000 배경, 그림자 소실) | 다크 토큰은 적용됐으나 primary가 라이트용 그대로라 대비 어색 | bg→surface→surface-2 3단 명도 위계, 밝은 primary+어두운 텍스트, 그림자 alpha 강화까지 |

**합격선: verifiable 70/70 전항목 통과 + subjective 평균 4.0 이상(단일 항목 3점 미만 없음).** 미달 시 최저 항목부터 수정해 재채점.
