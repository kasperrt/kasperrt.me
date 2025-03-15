import { useRef } from 'react';
import { NavLink } from 'react-router';
import { useRotate } from '~/hooks/useRotate';

export default function Index() {
  const textRef = useRef<HTMLElement>(null);

  useRotate({ elements: [{ multiplier: -0.5, ref: textRef }] });

  return (
    <section ref={textRef} className="flex w-2/5 flex-col gap-y-6 self-center pl-5 font-light">
      <h1 className="py-4 text-2xl font-bold">hi 👋</h1>
      <p>
        I am Kasper and I currently work as the VP of Engineering at Pistachio, a tech startup in Norway. Prior to this
        I worked as the Lead Architect at Aller Media.
      </p>
      <p>
        I have worked with a range of technologies from golang, react, postgresql - to svelte, c#, mongodb and{' '}
        <NavLink className="text-red-600" to="/cv">
          a bunch more
        </NavLink>
        .
      </p>
      <p>
        Want to get to know me or connect?
        <br />
        <a className="text-red-600" href="mailto:kasper@rynning-toennesen.email">
          kasper@rynning-toennesen.email
        </a>
      </p>
    </section>
  );
}
