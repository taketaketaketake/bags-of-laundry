import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { readWizard, writeWizard } from "../utils/wizard.server";

const Schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email()
});

export async function loader({ request }: LoaderFunctionArgs) {
  const w = await readWizard(request);
  if (!w.addons) return json({}, { status: 302, headers: { Location: "/addons" }});
  return json({ w });
}

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.formData();
  const parsed = Schema.safeParse(Object.fromEntries(fd));
  if (!parsed.success) return json({ error: "Please enter your name and a valid email." }, { status: 400 });
  return writeWizard(request, { customer: parsed.data }, "/checkout");
}

// Helper function to format order type display
const formatOrderType = (orderType: string) => {
  switch(orderType) {
    case 'wash_fold': return 'Wash & Fold';
    case 'dry_cleaning': return 'Dry Cleaning';
    case 'combo': return 'Combo Service';
    case 'bedding_bundle': return 'Bedding Bundle';
    default: return orderType;
  }
};

export default function Details() {
  const { w } = useLoaderData<typeof loader>();
  const action = useActionData<typeof action>();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Your details
          </h1>
          <p className="text-gray-600">
            We'll use this information to keep you updated on your order
          </p>
        </div>

        {/* Error Message */}
        {action?.error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-red-700 font-medium">{action.error}</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Form method="post" className="space-y-6">
              
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                      name="fullName" 
                      placeholder="Enter your full name" 
                      defaultValue={w.customer?.fullName} 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                      type="email" 
                      name="email" 
                      placeholder="your.email@example.com" 
                      defaultValue={w.customer?.email} 
                      required 
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send pickup confirmations and delivery updates here
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Options */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Account Setup</h2>
                </div>

                <label className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl cursor-pointer hover:bg-green-100 transition-colors">
                  <input 
                    type="checkbox" 
                    defaultChecked 
                    className="mt-1 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-900 block">
                      Create an account with a magic link
                    </span>
                    <span className="text-xs text-gray-600 mt-1 block">
                      We'll email you a secure link to access your order history and manage future pickups
                    </span>
                  </div>
                </label>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/addons" 
                  className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-4 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </a>
                
                <button 
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Continue to Checkout
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Order Summary
              </h3>
              
              <div className="space-y-4">
                
                {/* Pickup Details */}
                <div className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Pickup Details</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Address:</strong> {w.address?.line1}</p>
                    <p><strong>Date:</strong> {w.date}</p>
                    <p><strong>Phone:</strong> {w.phone}</p>
                  </div>
                </div>

                {/* Service Type */}
                <div className="pb-4 border-b border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Service</h4>
                  <p className="text-sm text-gray-600">{formatOrderType(w.orderType)}</p>
                </div>

                {/* Add-ons */}
                {(w.addons?.eco || w.addons?.hangDry || w.addons?.rush) && (
                  <div className="pb-4 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Add-ons</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      {w.addons.eco && <p>• Eco-friendly detergent (+$0.10/lb)</p>}
                      {w.addons.hangDry && <p>• Hang-dry delicates (+$0.25/lb)</p>}
                      {w.addons.rush && <p>• Same-day rush (+$10)</p>}
                    </div>
                  </div>
                )}

                {/* Estimate */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Estimated Total</h4>
                  <p className="text-2xl font-bold text-gray-900">~$33.75</p>
                  <p className="text-xs text-gray-500">Based on 15 lb average</p>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free pickup & delivery
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24-hour turnaround
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Text updates & tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}