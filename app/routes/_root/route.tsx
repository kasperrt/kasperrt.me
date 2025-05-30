import { useRef, useState } from 'react';
import { NavLink, Outlet, useViewTransitionState } from 'react-router';
import { Image } from '~/components/Image';
import { Underline } from '~/components/Underline';
import { useRotate } from '~/hooks/useRotate';
import { classNames } from '~/utils/classNames';
import { rootMeta } from './meta';

export const meta = rootMeta;

export default function RootLayout() {
  const imageRef = useRef<HTMLImageElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isMoreTransitioning = useViewTransitionState('/more');
  const [loadedImage, setLoadedImage] = useState<boolean>(false);

  const onImageLoaded = () => {
    setLoadedImage(true);
  };

  useRotate({
    elements: [
      { multiplier: -0.5, ref: headerRef },
      { multiplier: 4, shadow: { multiplier: 5 }, ref: imageRef },
    ],
  });

  return (
    <>
      <header ref={headerRef} className="top-2.5 right-2.5 z-10 text-right md:fixed md:w-2/5">
        <nav>
          <ul>
            <li className="p-2.5">
              <NavLink
                to="/"
                className={({ isActive }) => classNames('text-2xl font-bold', isActive && 'text-red-600')}
              >
                <Underline>
                  <span className="view-transition-title lowercase">Kasper Rynning-Tønnesen</span>
                </Underline>
              </NavLink>
            </li>
            <li className="p-2.5">
              <NavLink
                to="/more"
                viewTransition
                prefetch="intent"
                className={({ isActive }) => classNames('text-2xl font-bold', isActive && 'text-red-600')}
              >
                <Underline>cv</Underline>
              </NavLink>
            </li>
            <li className="p-2.5">
              <a href="https://github.com/kasperrt" className="group text-2xl font-bold">
                <Underline>github</Underline>
              </a>
            </li>
            <li className="p-2.5">
              <a href="https://www.linkedin.com/in/kasperrt/" className="group text-2xl font-bold">
                <Underline>linkedin</Underline>
              </a>
            </li>
            <li className="p-2.5">
              <a href="mailto:kasper@rynning-toennesen.email" className="group text-2xl font-bold">
                <Underline>contact</Underline>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Image
        alt="Me smiling"
        ref={imageRef}
        onLoad={onImageLoaded}
        imageClass={classNames(
          'view-transition-picture absolute -top-2/5 bottom-0 left-1/5 m-auto h-[fit-content,_min-content,_auto] max-h-3/5 max-w-2/5 opacity-100 transition-[border,opacity] md:fixed md:top-0 md:left-1/2 md:max-h-4/5 md:max-w-2/6',
          isMoreTransitioning && 'rounded-none !opacity-100',
        )}
        sources={[
          {
            type: 'image/webp',
            srcSet: '/me.webp',
          },
          {
            type: 'image/png',
            srcSet: '/me.png',
          },
        ]}
        {...(loadedImage && {
          style: {
            boxShadow: 'rgb(141, 141, 141) 9.91031px 9.61118px',
          },
        })}
      />

      <main className="relative flex flex-1 md:min-h-svh">
        <Outlet />
      </main>
    </>
  );
}
