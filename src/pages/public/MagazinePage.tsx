import React, { useEffect } from "react";

export default function MagazinePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock data
    const featuredPosts = [
        {
            id: 1,
            title: "La recomposition géopolitique en Afrique de l’Ouest",
            excerpt:
                "Analyse des nouvelles alliances stratégiques et de leurs impacts régionaux.",
        },
        {
            id: 2,
            title: "Climat des affaires et attractivité des investissements africains",
            excerpt:
                "Panorama des opportunités et risques pour les investisseurs institutionnels.",
        },
        {
            id: 3,
            title: "ZLECAf : entre ambitions politiques et réalités économiques",
            excerpt:
                "État des lieux de l’intégration régionale africaine.",
        },
    ];

    const latestPosts = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: `Publication stratégique ${i + 1}`,
        date: "Janvier 2026",
        excerpt:
            "Court aperçu analytique du contenu de cette publication stratégique.",
    }));

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 space-y-24">

            {/* ===================== BLOC 1 – EN-TÊTE ===================== */}
            <div className="text-center space-y-6">
                <h2 className="text-[36px] font-bold tracking-tight text-secondary">
                    SONNI INSIGHTS MAGAZINE
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Plateforme d’analyse stratégique de SONNI Group Advisory dédiée à la
                    géopolitique, à l’investissement et à l’intégration africaine.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <button className="px-6 py-3 border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition">
                        Télécharger le Magazine (PDF)
                    </button>
                    <button className="px-6 py-3 bg-secondary text-white font-medium hover:opacity-90 transition">
                        S’abonner / Demander l’accès
                    </button>
                </div>
            </div>

            {/* ===================== BLOC 2 – À LA UNE ===================== */}
            <div>
                <h3 className="text-2xl font-bold text-secondary mb-8">À la une</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="border p-6 flex flex-col justify-between hover:shadow-lg transition"
                        >
                            <div>
                                <h4 className="font-semibold text-primary text-lg mb-3">
                                    {post.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {post.excerpt}
                                </p>
                            </div>
                            <button className="mt-6 text-secondary font-medium hover:underline">
                                Lire →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===================== BLOC 3 – RUBRIQUES ===================== */}
            <div>
                <h3 className="text-2xl font-bold text-secondary mb-8">
                    Rubriques
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "Géopolitique & Diplomatie",
                        "Investissement & Climat des affaires",
                        "ZLECAf & Intégration régionale",
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="border p-6 text-center cursor-pointer hover:bg-secondary hover:text-white transition"
                        >
                            <h4 className="font-semibold">{category}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===================== BLOC 4 – DERNIÈRES PUBLICATIONS ===================== */}
            <div>
                <h3 className="text-2xl font-bold text-secondary mb-8">
                    Dernières publications
                </h3>
                <div className="space-y-6">
                    {latestPosts.map((post) => (
                        <div
                            key={post.id}
                            className="border-b pb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
                        >
                            <div>
                                <h4 className="font-semibold">{post.title}</h4>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    {post.excerpt}
                                </p>
                            </div>
                            <button className="text-secondary font-medium hover:underline whitespace-nowrap">
                                Lire →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===================== BLOC 5 – FOCUS PAYS ===================== */}
            <div>
                <h3 className="text-2xl font-bold text-secondary mb-8">
                    Focus Pays
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                    {["Sénégal", "Niger", "Côte d’Ivoire", "Guinée"].map((country) => (
                        <button
                            key={country}
                            className="border px-6 py-4 font-medium hover:bg-secondary hover:text-white transition"
                        >
                            {country} (PDF)
                        </button>
                    ))}
                </div>
            </div>

            {/* ===================== BLOC 6 – PREMIUM / ABONNEMENT ===================== */}
            <div className="bg-gray-50 p-10 text-center space-y-6">
                <h3 className="text-2xl font-bold text-secondary">
                    Accès Premium
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Certains rapports et analyses SONNI Insights sont réservés aux abonnés
                    (ambassades, institutions, banques, investisseurs).
                </p>
                <button className="px-8 py-3 bg-secondary text-white font-medium hover:opacity-90 transition">
                    Demander un accès Premium
                </button>
            </div>

        </section>
    );
}
