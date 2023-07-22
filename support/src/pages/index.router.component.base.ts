export const scheme = 'IndexRouterComponent'

export interface IndexRouterComponentBase {

    onSimCreate(): void;

    // getSearchSubject(): Subject<{ type: "💬" | "🧸", keyword: string }>;

    // setBackground(background: string): void

    // removeBackground(): void

    // setRandomBg(blur?: number): void;

    // removeBg(): void;

    // removeAllBg(): void;

    openMenuDrawer(): void;

    closeMenuDrawer(): void;
}
