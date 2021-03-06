/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: "MARLBORO Gold 6XL",
        href: "#",
        price: "$48",
        imageSrc: "https://www.tabakland.de/thumbnail/a9/14/cf/1644096225/651_20210727_124956225_l_600x600.jpeg",
        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "MARLBORO Red 7",
        href: "#",
        price: "$35",
        imageSrc: "https://www.tabakland.de/thumbnail/e4/be/98/1634214015/78148_s_600x600.jpg",
        imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "MARLBORO Gold Soft Label 7",
        href: "#",
        price: "$89",
        imageSrc: "https://www.tabakland.de/thumbnail/5b/55/1d/1634213741/78007_s_600x600.jpg",
        imageAlt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "MARLBORO Silver Blue 7",
        href: "#",
        price: "$35",
        imageSrc: "https://www.tabakland.de/thumbnail/28/b6/ee/1634214474/78161_s_600x600.jpg",
        imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
];

export default function Example() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
