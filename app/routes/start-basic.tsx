import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { readWizard, writeWizard } from "../utils/wizard.server";

const Schema = z.object({
  line1: z.string().min(3),
  postal: z.string().min(5),
  date: z.string().min(10), // YYYY-MM-DD
  phone: z.string().min(7)
});

export async function loader({ request }: LoaderFunctionArgs) {
  const w = await readWizard(request);
  return json({ w });
}

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.formData();
  
  // Handle both sources: homepage form or start-basic form
  const data = {
    line1: String(fd.get("address") || fd.get("line1") || ""), // homepage uses "address"
    postal: String(fd.get("postal") || ""), // extract from address if needed
    date: String(fd.get("date") || ""),
    phone: String(fd.get("phone") || "")
  };
  
  const parsed = Schema.safeParse(data);
  if (!parsed.success) return json({ error: "Please complete all fields." }, { status: 400 });

  // TODO: optionally call rpc.available_windows(parsed.data.postal, parsed.data.date) to pre-validate capacity
  return writeWizard(request, {
    address: { line1: parsed.data.line1, postal: parsed.data.postal },
    date: parsed.data.date,
    phone: parsed.data.phone
  }, "/order-type");
}

export default function StartBasic() {
  const { w } = useLoaderData<typeof loader>();
  const action = useActionData<typeof action>();
  
  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Where & when should we pick up?
          </h1>
          <p className="text-gray-600">
            Enter your pickup details to get started with your laundry service
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

        {/* Form */}
        <Form method="post" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
            {/* Address Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Pickup Address
              </label>
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                name="line1" 
                placeholder="Enter your street address" 
                defaultValue={w.address?.line1} 
                required 
              />
              <p className="text-xs text-gray-500 mt-1">
                We'll pick up from this location during your selected time window
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  ZIP Code
                </label>
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                  name="postal" 
                  placeholder="12345" 
                  defaultValue={w.address?.postal} 
                  required 
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pickup Date
                </label>
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900"
                  type="date" 
                  name="date" 
                  min={minDate}
                  defaultValue={w.date} 
                  required 
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Mobile Number
                </label>
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                  name="phone" 
                  type="tel"
                  placeholder="(555) 123-4567" 
                  defaultValue={w.phone} 
                  required 
                />
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quick & Convenient</h3>
                <p className="text-sm text-gray-600 mb-2">
                  We'll text you 30 minutes before pickup and provide real-time updates throughout the process.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>• 24-hour turnaround</span>
                  <span>• $35 minimum order</span>
                  <span>• Free pickup & delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              type="submit"
              className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Continue to Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <a 
              href="/pricing" 
              className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-4 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              View Pricing
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}