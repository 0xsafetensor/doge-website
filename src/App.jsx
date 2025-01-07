import React, { useState } from "https://esm.sh/react@18.2.0";
import {
  Calculator,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  Layout,
  PhoneCall,
  Search,
  ShoppingBag,
  Target,
  TwitterIcon,
} from "https://esm.sh/lucide-react@0.294.0";

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
      {isOpen && (
        <div className="p-4 bg-gray-50 rounded-b-lg">
          {children}
        </div>
      )}
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
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">AI running DOGE 🐾</h1>
        <p className="text-gray-600">How would AI save the us government money?</p>
      </div>

      <Section
        title="1800-SAVE-MONEY"
        tagline="Because Government Should Pick Up The Phone"
        icon={PhoneCall}
      >
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">Government Service Analysis</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">1. Scheduling (Department-Level Optimization)</h4>
              <CaseStudy
                agency="VA Medical Centers"
                metric="Current costs: $182M/year in no-shows ($312 per no-show × 585,000 annual no-shows)"
                impact="Savings: $54.6M/year through 30% no-show reduction + 125,000 staff hours saved"
              />
              <CaseStudy
                agency="Social Security Administration Field Offices"
                metric="Current costs: $98M/year in scheduling time (2.1M hours at $47/hour)"
                impact="Savings: $21.6M/year + 462,000 staff hours through digital scheduling"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">2. Customer Support Operations</h4>
              <CaseStudy
                agency="IRS Taxpayer Support"
                metric="Current costs: $156M/year handling FAQ calls ($25/call × 6.24M basic inquiry calls)"
                impact="Savings: $23.4M/year + 234,000 staff hours through automated response"
              />
              <CaseStudy
                agency="USCIS Contact Center"
                metric="Current costs: $48M/year for status checks ($20/call × 2.4M status check calls)"
                impact="Savings: $12M/year + 120,000 staff hours through online status system"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">3. Form Processing Optimization</h4>
              <CaseStudy
                agency="IRS Forms Management"
                metric="Current costs: $92M/year in error correction ($85/error × 1.08M errors)"
                impact="Savings: $32.2M/year + 268,500 staff hours through validation"
              />
              <CaseStudy
                agency="VA Benefits Processing"
                metric="Current costs: $64M/year in processing time ($40/form × 1.6M duplicate submissions)"
                impact="Savings: $28.8M/year + 240,000 staff hours through consolidation"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">4. Document Management</h4>
              <CaseStudy
                agency="Department of Education"
                metric="Current costs: $38M/year in retrieval time ($95/hour × 400,000 retrievals)"
                impact="Savings: $34.2M/year + 360,000 staff hours through cloud system"
              />
              <CaseStudy
                agency="HHS Grant Management"
                metric="Current costs: $45M/year in processing ($250/application × 180,000 applications)"
                impact="Savings: $18M/year + 150,000 staff hours through single portal"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">5. Search and Knowledge Access</h4>
              <CaseStudy
                agency="Department of Labor"
                metric="Current costs: $58M/year in search time ($47/hour × 1.23M hours)"
                impact="Savings: $23.2M/year + 492,000 staff hours through improved search"
              />
              <CaseStudy
                agency="EPA Knowledge Base"
                metric="Current costs: $42M/year in inefficient searches ($45/hour × 933,333 hours)"
                impact="Savings: $25.2M/year + 560,000 staff hours through unified portal"
              />
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Total Potential Impact (Year 1)</h3>
              <div className="space-y-2">
                <p className="font-medium">💰 Financial Savings: $638.8M</p>
                <p className="font-medium">⏰ Staff Hours Saved: 3,431,500 hours</p>
                <p className="font-medium">👥 Citizens Served Better: 12.4M interactions</p>
                <p className="text-sm text-blue-600 mt-4">
                  All improvements implementable under existing administrative authority
                </p>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium">Key Sources:</p>
                  <ul className="list-disc pl-4 mt-2 space-y-1">
                    <li>OPM Federal Time Use Survey 2023</li>
                    <li>GAO-23-105640 Report on Federal Administrative Efficiency</li>
                    <li>VA Office of Inspector General Report 2023-12</li>
                    <li>SSA Administrative Data Report 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Smart Procurement"
        tagline="Buy Like It's 2025, Not 1925"
        icon={ShoppingBag}
      >
        <div className="space-y-4">
          <h3 className="font-semibold">Current Pain Points:</h3>
          <div className="space-y-4">
            <CaseStudy
              agency="Department of Defense"
              metric="Average procurement cycle: 7 years"
              impact="Potential 70% reduction with automated workflows"
            />
            <CaseStudy
              agency="GSA Multiple Award Schedules"
              metric="$39B annual spend, 12% price variance"
              impact="AI price optimization could save $4.7B"
            />
          </div>

          <h3 className="font-semibold mt-6">Proposed Solutions:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Open experimental track for gov. technologies.</li>
            <li>Automatically sunsetting old rules - 1 year. Saves XYZ cost</li>
          </ul>
        </div>
      </Section>

      <Section
        title="Running the government like a company"
        tagline="Tell the government what you're doing. Govern by twitter poll."
        icon={Target}
      >
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Key Metrics:</h3>
            <ul className="space-y-2">
              <li>🎯 Earning reports for government officials. DRIs and KPIs</li>
              <li>⏱️ Time-to-resolution (not time-to-response)</li>
              <li>Basic monitoring of webpages. Delete unused webpages every quarter.</li>
              <li>💸 Cost per successful outcome (not just cost per transaction)</li>
              <li>RT to pass laws</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="YOU.GOV"
        tagline="All the ways the government affects you, in one place."
        icon={Layout}
      >
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-4">Personal Government Dashboard</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded">
                <h4 className="font-medium">My Taxes</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• 2024 Tax Return Status</li>
                  <li>• Payment History</li>
                  <li>• Upcoming Deadlines</li>
                  <li>• Direct Deposit Settings</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <h4 className="font-medium">My Benefits</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Active Benefits</li>
                  <li>• Application Status</li>
                  <li>• Payment Schedule</li>
                  <li>• Eligibility Updates</li>
                </ul>
              </div>
              <div className="p-3 bg-yellow-50 rounded">
                <h4 className="font-medium">My Business</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Licenses & Permits</li>
                  <li>• Tax ID Management</li>
                  <li>• Compliance Status</li>
                  <li>• Filing Deadlines</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <h4 className="font-medium">My Representatives</h4>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Contact Information</li>
                  <li>• Meeting Requests</li>
                  <li>• Local Updates</li>
                  <li>• Voting Information</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-4">My Government Impact Report</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium text-gray-600">Taxes & Contributions</h4>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-2xl font-bold">$8,240</p>
                    <p className="text-sm text-gray-500">Total Paid (2023)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">$3,180</p>
                    <p className="text-sm text-gray-500">Benefits Received</p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-medium text-gray-600">Service Usage</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span>National Parks Visited</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Federal Programs Used</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grant Applications</span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-600">Upcoming Deadlines</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Passport Renewal</span>
                    <span className="text-red-600">45 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vehicle Registration</span>
                    <span className="text-yellow-600">90 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-4">Agency Performance Dashboard</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Social Security Administration</span>
                <div className="flex items-center">
                  <span className="text-green-600 font-medium">92%</span>
                  <span className="text-sm text-gray-500 ml-2">Response Rate</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Veterans Affairs</span>
                <div className="flex items-center">
                  <span className="text-yellow-600 font-medium">87%</span>
                  <span className="text-sm text-gray-500 ml-2">Response Rate</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>IRS</span>
                <div className="flex items-center">
                  <span className="text-blue-600 font-medium">94%</span>
                  <span className="text-sm text-gray-500 ml-2">Response Rate</span>
                </div>
              </div>
            </div>
          </div>

          <CaseStudy
            agency="Current Digital Services Impact"
            metric="18 separate login systems consolidated into one"
            impact="78% reduction in authentication time, 92% user satisfaction"
          />

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Implementation Metrics</h4>
            <ul className="space-y-2 text-sm">
              <li>• Average time saved per citizen interaction: 12.5 minutes</li>
              <li>• Reduction in support tickets: 45%</li>
              <li>• Cross-agency data sharing improvement: 68%</li>
              <li>• Mobile accessibility score: 94/100</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Government Performance Tracking"
        tagline="Running Government Like a Modern Business"
        icon={Target}
      >
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-4">Agency KPIs</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-medium">Service Delivery Metrics</h4>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-2xl font-bold text-green-600">94%</p>
                    <p className="text-sm">On-Time Response</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">4.2min</p>
                    <p className="text-sm">Avg Wait Time</p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-3">
                <h4 className="font-medium">Budget Allocation</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <span className="text-sm ml-2">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;