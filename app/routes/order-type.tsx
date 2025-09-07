import { json, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { readWizard, writeWizard } from "../utils/wizard.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const w = await readWizard(request);
  // Guard: if user skipped step 1, send them back
  if (!w.address || !w.date || !w.phone) return json({}, { status: 302, headers: { Location: "/start-basic" }});
  return json({ w });
}

export async function action({ request }: ActionFunctionArgs) {
  const fd = await request.formData();
  const orderType = String(fd.get("orderType") || "wash_fold_20lb") as any;
  return writeWizard(request, { orderType }, "/addons");
}

export default function OrderType() {
  const { w } = useLoaderData<typeof loader>();
  const [isMember, setIsMember] = useState(false);

  // Pricing configuration
  const memberRate = 1.99;
  const nonMemberRate = 2.25;
  const currentRate = isMember ? memberRate : nonMemberRate;

  const perPoundOptions = [
    {
      id: "wash_fold_10lb",
      name: "Wash & Fold - 10 lbs",
      subtitle: "Perfect for weekly maintenance",
      description: "Ideal for individuals or light weekly loads. Professional wash, dry, and fold service.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop",
      weight: 10,
      details: "plus $35 minimum",
      turnaround: "~24 hours",
      popular: false
    },
    {
      id: "wash_fold_20lb", 
      name: "Wash & Fold - 20 lbs",
      subtitle: "Most Popular Choice",
      description: "Perfect for families and couples. Our most requested service size for regular laundry needs.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop",
      weight: 20,
      details: "plus $35 minimum",
      turnaround: "~24 hours",
      popular: true
    },
    {
      id: "wash_fold_30lb",
      name: "Wash & Fold - 30 lbs", 
      subtitle: "Best Value for Large Households",
      description: "Great for large families or bulk laundry. Maximum value with our per-pound pricing.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=400&auto=format&fit=crop",
      weight: 30,
      details: "plus $35 minimum", 
      turnaround: "~24 hours",
      popular: false
    }
  ];

  const perBagOptions = [
    {
      id: "small_bag",
      name: "Small Bag",
      subtitle: "Fixed Price Convenience",
      description: "Perfect for individuals or light loads. One fixed price regardless of actual weight (within limits).",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
      price: "$35",
      details: "fits 12-18 lbs",
      turnaround: "~24 hours",
      popular: false
    },
    {
      id: "medium_bag",
      name: "Medium Bag", 
      subtitle: "Most Popular Bag Size",
      description: "Great for families and regular laundry loads. Fixed pricing with generous capacity limits.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
      price: "$55",
      details: "fits 20-30 lbs",
      turnaround: "~24 hours", 
      popular: true
    },
    {
      id: "large_bag",
      name: "Large Bag",
      subtitle: "Maximum Capacity",
      description: "Best for large households or bulk loads. Fixed price with our largest capacity allowance.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
      price: "$85", 
      details: "fits 35-45 lbs",
      turnaround: "~24 hours",
      popular: false
    }
  ];

  const specialtyOptions = [
    {
      id: "dry_cleaning",
      name: "Dry Cleaning",
      subtitle: "Professional Garment Care", 
      description: "Expert care for suits, dresses, coats, delicates, and special fabrics requiring dry cleaning.",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=400&auto=format&fit=crop",
      price: "From $8",
      priceUnit: "per item",
      details: "plus $35 minimum",
      turnaround: "~24-48 hours",
      popular: false
    },
    {
      id: "bedding_bundle",
      name: "Bedding Bundle",
      subtitle: "Sheets & Comforters",
      description: "Complete bedding sets, comforters, and bulky items. Specialized care for your bedding.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=400&auto=format&fit=crop",
      price: "From $20",
      priceUnit: "per bundle", 
      details: "plus $35 minimum",
      turnaround: "~24 hours",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            What are we picking up?
          </h1>
          <p className="text-gray-600 mb-6">Choose the service that best fits your laundry needs</p>
          
          {/* Member Toggle */}
          <div className="inline-flex items-center bg-white rounded-xl p-1 shadow-sm border-2 border-gray-200 mb-4">
            <button
              type="button"
              onClick={() => setIsMember(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isMember 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Standard Pricing
            </button>
            <button
              type="button"
              onClick={() => setIsMember(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                isMember 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Member Pricing
            </button>
          </div>
          
          {isMember && (
            <div className="text-sm text-green-600 font-medium">
              🎉 Save $0.26 per pound with membership!
            </div>
          )}
        </div>

        <Form method="post">
          
          {/* Per Pound Wash & Fold Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Per Pound Pricing</h2>
              <p className="text-gray-600">Pay by weight - perfect for regular laundry loads</p>
              <div className="mt-2">
                <span className="text-2xl font-bold text-blue-600">${currentRate}</span>
                <span className="text-gray-600"> per pound</span>
                {!isMember && (
                  <span className="ml-2 text-sm text-green-600 font-medium">
                    (Save $0.26/lb with membership!)
                  </span>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              {perPoundOptions.map((type) => {
                const isSelected = w.orderType === type.id || (!w.orderType && type.id === "wash_fold_20lb");
                const displayPrice = `$${(type.weight * currentRate).toFixed(2)}`;
                
                return (
                  <label 
                    key={type.id}
                    className="cursor-pointer group block"
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value={type.id}
                      defaultChecked={isSelected}
                      className="sr-only"
                    />
                    
                    <div className={`
                      relative bg-white rounded-xl border-2 p-6 transition-all duration-300
                      hover:shadow-lg hover:-translate-y-1 group-hover:border-blue-400
                      ${isSelected 
                        ? 'border-blue-500 shadow-lg ring-4 ring-blue-100' 
                        : 'border-gray-200 shadow-sm'
                      }
                    `}>
                      
                      {/* Popular Badge */}
                      {type.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Content Layout */}
                      <div className="flex gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={type.image}
                            alt={type.name}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-md"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-bold text-gray-900 text-xl leading-tight">
                                {type.name}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">{type.subtitle}</p>
                            </div>
                            <div className="text-right ml-4 flex-shrink-0">
                              <div className="text-xl font-bold text-gray-900">{displayPrice}</div>
                              <div className="text-xs text-gray-500">${currentRate}/lb</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {type.description}
                          </p>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">{type.details}</span>
                            <span className="font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
                              {type.turnaround}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute top-4 left-4 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Per Bag Pricing Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Per Bag Pricing</h2>
              <p className="text-gray-600">Fixed pricing regardless of weight within limits</p>
            </div>
            
            <div className="space-y-4">
              {perBagOptions.map((type) => {
                const isSelected = w.orderType === type.id;
                
                return (
                  <label 
                    key={type.id}
                    className="cursor-pointer group block"
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value={type.id}
                      defaultChecked={isSelected}
                      className="sr-only"
                    />
                    
                    <div className={`
                      relative bg-green-50 rounded-xl border-2 p-6 transition-all duration-300
                      hover:shadow-lg hover:-translate-y-1 group-hover:border-green-400
                      ${isSelected 
                        ? 'border-green-500 shadow-lg ring-4 ring-green-100' 
                        : 'border-green-200 shadow-sm'
                      }
                    `}>
                      
                      {/* Popular Badge */}
                      {type.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Content Layout */}
                      <div className="flex gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={type.image}
                            alt={type.name}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-md"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-bold text-gray-900 text-xl leading-tight">
                                {type.name}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">{type.subtitle}</p>
                            </div>
                            <div className="text-right ml-4 flex-shrink-0">
                              <div className="text-xl font-bold text-gray-900">{type.price}</div>
                              <div className="text-xs text-gray-500">per bag</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {type.description}
                          </p>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">{type.details}</span>
                            <span className="font-medium text-gray-700 bg-white px-2 py-1 rounded-md">
                              {type.turnaround}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute top-4 left-4 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Specialty Services Section */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Specialty Services</h2>
              <p className="text-gray-600">Professional care for special items and fabrics</p>
            </div>
            
            <div className="space-y-4">
              {specialtyOptions.map((type) => {
                const isSelected = w.orderType === type.id;
                
                return (
                  <label 
                    key={type.id}
                    className="cursor-pointer group block"
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value={type.id}
                      defaultChecked={isSelected}
                      className="sr-only"
                    />
                    
                    <div className={`
                      relative bg-purple-50 rounded-xl border-2 p-6 transition-all duration-300
                      hover:shadow-lg hover:-translate-y-1 group-hover:border-purple-400
                      ${isSelected 
                        ? 'border-purple-500 shadow-lg ring-4 ring-purple-100' 
                        : 'border-purple-200 shadow-sm'
                      }
                    `}>
                      
                      {/* Popular Badge */}
                      {type.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Content Layout */}
                      <div className="flex gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={type.image}
                            alt={type.name}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-md"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-bold text-gray-900 text-xl leading-tight">
                                {type.name}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">{type.subtitle}</p>
                            </div>
                            <div className="text-right ml-4 flex-shrink-0">
                              <div className="text-xl font-bold text-gray-900">{type.price}</div>
                              <div className="text-xs text-gray-500">{type.priceUnit}</div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {type.description}
                          </p>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">{type.details}</span>
                            <span className="font-medium text-gray-700 bg-white px-2 py-1 rounded-md">
                              {type.turnaround}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Selection Indicator */}
                      {isSelected && (
                        <div className="absolute top-4 left-4 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* More Info Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Additional Options</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Extended days/miles:</strong> Special rates available</p>
                  <p><strong>Same-day rush:</strong> +$10 or +$0.25/lb (limited availability)</p>
                  <p><strong>Add-ons:</strong> Eco detergent (+$0.10/lb), Hang-dry delicates (+$0.25/lb)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <a 
              href="/start-basic" 
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </a>
            
            <button 
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-200 font-medium"
            >
              Continue
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}