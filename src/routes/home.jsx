import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
const features = [
  {
    name: 'Sed do eiusmod',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'Laboris nisi ut',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon
  },
  {
    name: 'Duis aute irure',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon
  },
  {
    name: 'Velit esse cillum',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon
  }
];
function Home() {
  return (
    <>
      <div className="">
        <div className="">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map(feature => (
                <div
                  key={feature.name}
                  className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie ut
              eleifend eros ligula cubilia sed. Duis hendrerit amet commodo
              vehicula a eu morbi varius. Integer tellus facilisis volutpat
              aenean justo, rhoncus ligula. Bibendum purus ad fermentum volutpat
              torquent cras. In elit hac auctor efficitur lobortis posuere
              convallis. Gravida malesuada urna suspendisse metus erat
              sollicitudin elementum cras. Sit dictum duis maecenas parturient
              at congue magna convallis finibus. Leo litora fusce malesuada urna
              integer nibh.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Inceptos ante vehicula viverra enim consectetur lectus. Mi
              habitasse adipiscing nunc, tempor tellus massa nisi mattis. Donec
              eu convallis morbi blandit maximus facilisis. Id vehicula cras
              imperdiet aliquet massa auctor venenatis quis. Ante accumsan nibh
              rutrum adipiscing aliquam fusce. Integer suspendisse imperdiet
              habitant cubilia vulputate proin magna. Dolor ante commodo blandit
              magna congue adipiscing enim. Mi tempus accumsan venenatis leo
              massa elit.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nam leo nullam duis nulla tincidunt venenatis. Malesuada vitae
              nullam arcu fusce nascetur facilisis porttitor ridiculus?
              Tristique lacinia praesent ullamcorper sapien fames urna ridiculus
              nec quisque. Morbi adipiscing proin tellus gravida primis elit.
              Dolor nullam himenaeos lorem tempor nisl scelerisque; finibus
              luctus morbi. Varius conubia et maximus lectus vestibulum eros
              tristique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
