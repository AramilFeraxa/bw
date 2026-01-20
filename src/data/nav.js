export const headerNav = [
    { label: "Strona główna", href: "/" },
    {
        label: "O nas",
        children: [
            { label: "Zespół", href: "/zespol" },
            { label: "Statut", href: "/statut" }
        ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Projekty", href: "/projekty" },
    { label: "Wydarzenia", href: "/wydarzenia" },
    {
        label: "Wolontariat", children: [
            { label: "Zostań wolontariuszem", href: "/wolontariat/zostan-wolontariuszem" },
            { label: "Strefa wolontariusza", href: "/wolontariat/strefa-wolontariusza" },
            { label: "Dziennik wolontariusza", href: "/wolontariat/dziennik-wolontariusza" },
            { label: "Minigranty", href: "/projekty/minigranty-aktywni-dla-bezpiecznego-wypoczynku" },
            { label: "O projekcie", href: "/projekty/aktywny-wolontariat-dla-bezpiecznego-wypoczynku" }
        ]
    },
    { label: "Kontakt", href: "/kontakt" }
];
