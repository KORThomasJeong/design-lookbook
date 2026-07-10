# design-lookbook

AI가 웹 프로그램을 만들 때 참조하는 **번호 기반 디자인 컨셉 라이브러리**.
"3번(토스풍)으로 만들어줘" 한 마디로, AI가 만든 티 나는 UI 대신 일관된 디자인 언어가 적용된 결과물을 얻는 것이 목표다.

## 어떻게 쓰나

**Claude Code 등 AI 에이전트에서:**

```
/lookbook 3-a            (로컬 스킬 — 소비 전용)
또는: 이 프로젝트 UI를 design-lookbook 3-a로 만들어줘
→ AI가 presets/INDEX.md에서 3번(Jelly, 토스풍)을 찾아 SPEC.md + tokens.css를 읽고 적용
```

이 저장소가 로컬에 없다면 raw URL로 스펙을 읽게 한다:

```
https://raw.githubusercontent.com/KORThomasJeong/design-lookbook/main/presets/INDEX.md
https://raw.githubusercontent.com/KORThomasJeong/design-lookbook/main/presets/3-jelly/SPEC.md
https://raw.githubusercontent.com/KORThomasJeong/design-lookbook/main/presets/3-jelly/tokens.css
```

**사람은:** GitHub Pages 갤러리(`docs/`)에서 데모 화면을 눈으로 비교하고 번호를 고른다.

## 프리셋

| 번호 | 코드네임 | 성격 |
|---|---|---|
| 1 | Frost | Fluent풍 — 프로덕티비티/협업 툴 |
| 2 | Steel | Carbon풍 — 엔터프라이즈 데이터 콘솔 |
| 3 | Jelly | 토스풍 — 모바일 핀테크/커머스 |
| 4 | Obsidian | Linear/Vercel풍 — 다크 모던 SaaS |
| 5 | Clay | 머티리얼풍 — 톤 팔레트 안드로이드 소비자 앱 |
| 6 | Glass | iOS풍 — 반투명 유리감의 소비자 앱 |
| 7 | Quartz | 앤트풍 — 정보 밀도 높은 B2B 관리자 콘솔 |
| 8 | Canvas | 폴라리스풍 — 커머스 어드민/백오피스 |
| 9 | Prism | 스펙트럼풍 — 다크 기본 크리에이티브 툴 |
| 10 | Slate | 깃허브풍 — 개발자 협업/코드 호스팅 |
| 11 | Asphalt | 우버풍 — 흑백 대비의 모빌리티 서비스 |
| 12 | Ink | 스트라이프풍 — 핀테크 결제 대시보드 |
| 13 | Coral | 에어비앤비풍 — 사진 중심 여행/숙박 마켓 |
| 14 | Enamel | 배민풍 — 뉴트로 감성 대중 배달앱 |
| 15 | Amber | 카카오풍 — 노란 포인트의 대중 메신저 |
| 16 | Jade | 네이버풍 — 검색 중심 대중 포털 |

> 1~4는 complete(5화면 데모 有), 5~16은 spec-draft(스펙 완료, 데모는 추후).

색 변형은 `3-a`, `3-b`, 규칙 안 랜덤 팔레트는 `3-r212` 형식. 전체 목록·상태는 [presets/INDEX.md](presets/INDEX.md).

## 구조

- `presets/` — 스펙 원본 (풀 디자인 언어: 토큰·컴포넌트·레이아웃·모션·카피·금지 규칙)
- `docs/` — GitHub Pages 갤러리 (스펙의 레퍼런스 구현, 컨셉당 5화면 데모). `docs/<번호>-<코드네임>/tokens.css`는 `presets/` 원본의 복사본이며, 수정은 presets 원본에서만 하고 수정 후 docs로 재복사한다(직접 편집 금지).
- `SPEC-FORMAT.md` — 프리셋 스펙 스키마
- `WORKFLOWS.md` — AI용 플레이북 (컨셉 추가 / 변형 / 랜덤 색 / 적용)
- `CLAUDE.md` — AI 작업 지침

새 컨셉 추가는 AI에게 "OO 사이트 분석해서 5번으로 추가해줘"라고 하면 WORKFLOWS.md W1 절차로 진행된다.

## 원칙

각 프리셋은 실존 디자인 시스템/서비스에서 **영감**을 받았으며 출처를 명기하지만, 해당 기업과 무관한 독립 해석이다.
