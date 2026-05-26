/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import History from './components/History';
import EventDetails from './components/EventDetails';
import Locations from './components/Locations';
import Gallery from './components/Gallery';
import DressCode from './components/DressCode';
import Accommodations from './components/Accommodations';
import Transport from './components/Transport';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <History />
        <EventDetails />
        <Locations />
        <Gallery />
        <DressCode />
        <Accommodations />
        <Transport />
        <RSVP />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
