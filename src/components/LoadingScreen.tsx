import React from 'react';
import { Aperture, ScanLine } from 'lucide-react';
import { getImageUrl } from '../lib/imageAssets';

interface LoadingScreenProps {
  isExiting: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isExiting }) => (
  <div
    className={`loading-screen${isExiting ? ' loading-screen-exit' : ''}`}
    role="status"
    aria-label="Preparing the Obra Creations experience"
  >
    <div className="loading-screen-grid" aria-hidden="true" />

    <div className="loading-content">
      <div className="loading-brand">
        <img src={getImageUrl('/src/assets/images/Logo.png')} alt="" />
        <span>OBRA CREATIONS</span>
      </div>

      <div className="lens-assembly" aria-hidden="true">
        <div className="lens-ring lens-ring-outer" />
        <div className="lens-ring lens-ring-middle" />
        <div className="lens-ring lens-ring-inner" />
        <div className="lens-glass">
          <Aperture className="lens-aperture" strokeWidth={1.15} />
          <span className="lens-reflection" />
        </div>
        <span className="lens-mark lens-mark-top">50 MM</span>
        <span className="lens-mark lens-mark-bottom">ƒ / 1.8</span>
        <span className="lens-mark lens-mark-left">OPTICS</span>
        <span className="lens-mark lens-mark-right">01:1</span>
      </div>

      <div className="loading-status">
        <div className="loading-status-heading">
          <ScanLine className="h-4 w-4" />
          <span>CALIBRATING THE LENS</span>
          <span className="loading-status-value">READYING STUDIO</span>
        </div>
        <div className="loading-progress-track">
          <span className="loading-progress-fill" />
        </div>
        <div className="loading-status-footer">
          <span>OBRA CREATIONS · EST. 2019</span>
          <span>PLEASE WAIT</span>
        </div>
      </div>
    </div>
  </div>
);
