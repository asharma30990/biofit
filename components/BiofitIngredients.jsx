/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: 'Bacillus Subtilis',
    description:
      'This bacterial strain naturally exists in the GI system of every human being. It is also found in the environment around you, particularly in soil. In general, it is a harmless bacterial strain that exerts no side effects in both animals and humans. Its inclusion in the BioFit pills is owing to its properties that can reduce inflammatory levels to boost a slowed-down metabolism.',
  },
  {
    name: 'Lactobacillus Casei',
    description:
      'This is another type of bacteria that is commonly found in the intestines as well as the oral cavity of humans. It is particularly famous for the role it plays in controlling lactose intolerance. When you supplement on BioFit, your body loads up on this probiotic which helps in the digestion of all complex food molecules which may otherwise be impossible to break down. Moreover, Lactobacillus Casei also improves bowel movements which is why it is a common ingredient in many anti-diarrheal supplements too.',
  },
  {
    name: 'Lactobacillus Plantarum',
    description:
      'This particular BioFit ingredient is extremely resilient and can survive in all harsh environments due to its extensively large genomic structure. It is commonly found in kimchi, sourdough, and other fermented foods. As soon as this lactobacillus strain enters the body, it starts working to remove toxins while killing any harmful bacteria that might be negatively affecting the digestive processes.',
  },

  {
    name: 'Lactobacillus Acidophilus',
    description:
      'Lactobacillus Acidophilus is a rather popular bacteria found in the human gut which helps convert lactic acid into lactase. As a part of BioFit capsules, it prevents foreign invaders from growing inside the gut and, in this way, it can prevent several issues.',
  },
  {
    name: 'Bifidobacterium Longum',
    description:
      'Bifidobacterium Longum is particularly famous for lowering the levels of oxidative stress inside the body. It also helps to achieve a balance between the bacterial strains in the gut.',
  },
  {
    name: 'Bifidobacterium Breve',
    description:
      'This probiotic strain works by strengthening the immune system so that the body can protect itself from dangerous pathogens. Moreover, it reduces fat, improves the health of hair and skin, enhances respiratory health, and protects against yeast infections. A lot of people naturally lack Bifidobacterium Breve in their body which is why their health can suffer. But with proper supplementation with BioFit, all such issues can be resolved',
  },
  {
    name: 'Bacterium Lactis',
    description:
      'Bacterium Lactis is the last strain of probiotic bacteria added to the BioFit supplement with the purpose to relieve anxiety and depression while regulating the sleep cycle.',
  },
  {
    name: 'MCTs',
    description:
      'In addition to the probiotics mentioned above, BioFit capsules also contain medium-chain triglycerides (MCTs). These fatty acids are compounds with high absorbability that have been associated with weight loss in multiple research studies. In fact, experts believe that consuming them consistently can lead to fat burning without the need of modifying diet or exercise routine in any way. New BioFit customers in the USA and other eligible countries can take advantage of this limited-time discount offer on BioFit pills.',
  },
]

export default function BiofitIngredients() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover object-center w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
            Biofit Ingredients
          </h2>
          <p className="mt-4 text-gray-500">
            BIOFIT IS MADE FROM ALL-NATURAL INGREDIENTS THAT HAVE NO HARMFUL
            SIDE EFFECTS ON YOUR BODY. ALL OF THOSE INGREDIENTS ARE RARE, POTENT
            AND VERY EFFECTIVE. THE FOLLOWING INGREDIANTS ARE USED TO FORM
            BIOFIT SUPPLEMENT.
          </p>
        </div>

        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="pt-4 border-t border-gray-200">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
