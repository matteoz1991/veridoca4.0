import React from 'react';

export function AdSenseChecklistPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-200">
      <h1 className="text-3xl font-bold mb-8 text-white">AdSense Approval Checklist</h1>
      
      <div className="space-y-6">
        <ChecklistSection title="Technical Requirements">
          <ChecklistItem>HTTPS enabled (check URL has padlock)</ChecklistItem>
          <ChecklistItem>Mobile responsive (test on phone)</ChecklistItem>
          <ChecklistItem>Fast loading (&lt; 3 seconds)</ChecklistItem>
          <ChecklistItem>No 404 errors</ChecklistItem>
        </ChecklistSection>

        <ChecklistSection title="Required Pages">
          <ChecklistItem>Privacy Policy at /integritetspolicy (with AdSense section)</ChecklistItem>
          <ChecklistItem>About Us at /om-oss</ChecklistItem>
          <ChecklistItem>Contact at /kontakt (with working form)</ChecklistItem>
          <ChecklistItem>Terms of Service at /anvandarvillkor</ChecklistItem>
        </ChecklistSection>

        <ChecklistSection title="Content Requirements">
          <ChecklistItem>20+ contract pages with full guides</ChecklistItem>
          <ChecklistItem>Each page 1500+ words</ChecklistItem>
          <ChecklistItem>Original content (not copied)</ChecklistItem>
          <ChecklistItem>Content updated within last month</ChecklistItem>
        </ChecklistSection>

        <ChecklistSection title="GDPR Compliance">
          <ChecklistItem>Cookie consent banner appears</ChecklistItem>
          <ChecklistItem>Can accept/reject cookies</ChecklistItem>
          <ChecklistItem>Privacy policy mentions Google AdSense</ChecklistItem>
        </ChecklistSection>

        <ChecklistSection title="Design & Navigation">
          <ChecklistItem>Clear navigation menu</ChecklistItem>
          <ChecklistItem>Footer with all legal links</ChecklistItem>
          <ChecklistItem>Professional design</ChecklistItem>
          <ChecklistItem>Readable fonts (14px+)</ChecklistItem>
        </ChecklistSection>

        <ChecklistSection title="Traffic & Analytics">
          <ChecklistItem>500+ visitors per month</ChecklistItem>
          <ChecklistItem>Organic traffic from Google</ChecklistItem>
          <ChecklistItem>Google Analytics installed (optional)</ChecklistItem>
        </ChecklistSection>
      </div>
    </div>
  );
}

function ChecklistSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-slate-700 bg-slate-800/50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-600 outline-none accent-amber-500" />
      <span className="text-slate-300">{children}</span>
    </div>
  );
}
