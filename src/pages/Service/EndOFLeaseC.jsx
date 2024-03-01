import React from 'react';
import { ContactForm, ScrollToTop } from '../../components';

function EndOFLeaseC() {
  return (
    <div className="w-[80%] flex flex-col gap-3">
      <ScrollToTop />
      {/* heading  */}
      <div className="">
        <h2 className="text-4xl capitalize text-copy-green font-semibold border-b pb-3">
          End Of Lease Cleaning Services
        </h2>
      </div>

      {/* content  */}
      <div className="content flex flex-col gap-4">
        <p>
          They say moving house is up there with being one of the most stressful
          experiences we go through in life. If you’ve done it before, or you’re
          going through it now, you’ll probably agree.
        </p>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">
            Boxes, packing, moving — who needs cleaning!
          </p>
          <div className="flex flex-col gap-3">
            <p>
              The boxes, the packing, the realisation that you own so much more
              ‘stuff’ than you ever thought possible — it all leads to feeling
              overwhelmed, anxious and stressed. It’s too late to think about
              having a garage sale or a decluttering session because there’s
              just way too much for you to do. And besides, the thought of
              arguing about what to get rid of and what to keep — it’s almost
              just easier to pack it all, move it all and then work that all out
              later.
            </p>
            <p>
              But then, there's the cleaning of the empty shell that’s left
              behind. Well, that's something you really don't need to deal with
              — so that's what we're here for.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">
            Book a V.I.P. End Of Lease Cleaning Service then just lock up and
            walk away
          </p>
          <div className="flex flex-col gap-3">
            <p>
              Imagine — instead of having to drag yourself back to the old place
              with the car loaded up with cleaning products, mops, brooms and
              the vacuum cleaner plus all the attachments (assuming you don’t
              forget that little one) — instead of all that, why don’t you let
              one of our V.I.P. franchisees take care of that stressful End Of
              Lease Cleaning for you?
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">Ideal for owners and renters</p>
          <div className="flex flex-col gap-3">
            <p>
              Whether you’re the homeowner or you need to make sure that you get
              your bond back once you move out of your rental property, a V.I.P.
              Exit Cleaning Service really is the perfect solution. So, once
              you’ve packed up, simply take that last box with you, close the
              door and walk away with a smile on your face. We’ll then take care
              of the rest so you can focus on your next exciting chapter — life
              at your new home.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">
            Rentals and Airbnb Exit Cleaning a specialty
          </p>
          <div className="flex flex-col gap-3">
            <p>
              More and more people are investing in property these days, but
              with that comes the responsibility of keeping that rental property
              looking fabulous. And taking care of that Exit Cleaning in case
              your tenant hasn’t done as great a job cleaning it as you had
              hoped.
            </p>
            <p>
              If you’re managing a number of rental properties or you’ve got a
              popular Airbnb property with lots of short-term visitors to
              continually clean up after, contact us at V.I.P. and talk to us
              about tailoring an Exit Cleaning Package specially for you.
            </p>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <ContactForm />
    </div>
  );
}

export default EndOFLeaseC;
