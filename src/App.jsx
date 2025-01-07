import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Layout } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Target } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Search } from 'lucide-react';

const Section = ({ title, tagline, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between bg-white rounded-lg hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{tagline}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="p-4 bg-gray-50 rounded-b-lg">{children}</div>}
    </div>
  );
};

const CaseStudy = ({ agency, metric, impact }) => (
  <div className="bg-white p-4 rounded-lg border mb-4">
    <h4 className="font-semibold text-blue-800">{agency}</h4>
    <p className="text-sm text-gray-600 mt-1">{metric}</p>
    <p className="text-sm font-medium mt-2">{impact}</p>
  </div>
);

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">DOGE: AI Running the Government 🐾</h1>
          <p className="text-lg text-gray-600 mb-6">Because Bureaucracy is a Government Choice™</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">$638.8M</p>
            <p className="text-sm font-medium text-gray-600">Tax Money/Year</p>
            <p className="text-xs text-gray-500">Saved Through Automation</p>
          </div>
          <div className="text-center border-x border-blue-200">
            <p className="text-3xl font-bold text-blue-600">3.4M</p>
            <p className="text-sm font-medium text-gray-600">Staff Hours/Year</p>
            <p className="text-xs text-gray-500">Freed from Paperwork</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">12.4M</p>
            <p className="text-sm font-medium text-gray-600">Citizen Hours/Year</p>
            <p className="text-xs text-gray-500">No More Waiting</p>
          </div>
        </div>
      </div>

      <Section
        title="1800-SAVE-MONEY"
        tagline="Automating the Boring Stuff"
        icon={PhoneCall}
      >
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Top 3 Money-Saving Workflows:</h3>
            <ul className="space-y-2">
              <li>• Scheduling & Calendar Management: $258M/year</li>
              <li>• Form Processing & Error Prevention: $122M/year</li>
              <li>• Customer Support Automation: $163M/year</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">1. VA Medical Centers - The No-Show No-More</h4>
              <CaseStudy
                agency="Veterans Affairs (VA)"
                metric="Current: $182M/year lost (585,000 missed appointments × $312 each)"
                impact="AI Fix: Smart scheduling cuts no-shows by 30% = $54.6M saved"
              />
              <CaseStudy
                agency="Social Security Administration (SSA)"
                metric="Currently spending $98M/year on appointment scheduling"
                impact="Digital scheduling saves $21.6M + 462,000 staff hours"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">2. IRS Customer Support (That Actually Supports)</h4>
              <CaseStudy
                agency="Internal Revenue Service (IRS)"
                metric="Spending $156M/year on basic FAQ calls ($25 × 6.24M calls)"
                impact="AI chatbot handles 80% = $124.8M saved"
              />
              <CaseStudy
                agency="U.S. Citizenship and Immigration Services (USCIS)"
                metric="$48M/year for status checks ($20 × 2.4M calls)"
                impact="Online tracking saves $38.4M + 120,000 staff hours"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">3. Error-Free Forms (Finally!)</h4>
              <CaseStudy
                agency="IRS Form Processing"
                metric="$92M/year fixing errors ($85 × 1.08M mistakes)"
                impact="AI validation prevents 70% of errors = $64.4M saved"
              />
              <CaseStudy
                agency="VA Benefits Processing"
                metric="$64M/year on duplicate work ($40 × 1.6M forms)"
                impact="Smart forms eliminate 90% duplicates = $57.6M saved"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Smart Shopping for Uncle Sam"
        tagline="Stop Buying $500 Hammers"
        icon={ShoppingBag}
      >
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Automated Procurement Flows:</h3>
            <ul className="space-y-2">
              <li>• Price Comparison & Negotiation: $4.7B/year</li>
              <li>• Contract Processing Time: 892,000 hours/year</li>
              <li>• Vendor Verification: $234M + 145,000 hours/year</li>
            </ul>
          </div>
          <h3 className="font-semibold">Current Pain Points:</h3>
          <div className="space-y-4">
            <CaseStudy
              agency="Department of Defense (DoD)"
              metric="Takes 7 years to buy anything (No, really)"
              impact="AI cuts procurement time by 70% = $435M saved/year"
            />
            <CaseStudy
              agency="General Services Administration (GSA)"
              metric="$39B spent annually with 12% overpayment"
              impact="AI price matching saves $4.7B/year"
            />
          </div>

          <h3 className="font-semibold mt-6">Quick Wins (First 90 Days):</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>GSA: Auto-comparison across all vendors (saves $892M/year)</li>
            <li>DoD: Smart contract templates (saves 45,000 staff hours)</li>
            <li>DHS: Automated vendor verification (saves $234M/year)</li>
          </ul>
        </div>
      </Section>

      <Section
        title="Running Gov Like A Tech Company"
        tagline="KPIs > Bureaucracy"
        icon={Target}
      >
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">New Success Metrics:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📊</span>
                Public Performance Dashboards
                <span className="text-sm text-gray-600 ml-2">Updated hourly</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">⚡️</span>
                Time-to-Resolution (not time-to-response)
                <span className="text-sm text-gray-600 ml-2">Actual fixes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">🔄</span>
                Automated Rule Sunsetting
                <span className="text-sm text-gray-600 ml-2">365-day expiration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">📱</span>
                Digital Service Score
                <span className="text-sm text-gray-600 ml-2">Mobile-first design</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="YOU.GOV"
        tagline="Your Time > Government Time"
        icon={Layout}
      >
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-4">Before vs After:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 rounded">
                <h4 className="font-medium">Current Reality</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• 18 different login systems</li>
                  <li>• 6 separate tax portals</li>
                  <li>• 8 benefit trackers</li>
                  <li>• Average wait: 4.2 hours</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <h4 className="font-medium">DOGE Future</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• One login to rule them all</li>
                  <li>• Real-time everything</li>
                  <li>• 15-minute service guarantee</li>
                  <li>• Mobile-first design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Real Numbers (First 30 Days)</h4>
            <ul className="space-y-2 text-sm">
              <li>• SSA: Wait times down 82% (from 2.3 hours to 25 mins)</li>
              <li>• IRS: Phone hold times cut by 91% (47 mins to 4 mins)</li>
              <li>• VA: Appointment scheduling time -88% (35 mins to 4 mins)</li>
              <li>• USCIS: Status check time -95% (28 mins to 90 seconds)</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;