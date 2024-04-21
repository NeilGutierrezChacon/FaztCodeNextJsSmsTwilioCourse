"use client";

function Page() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const sms = {
        phone: formData.get('phone'),
        message: formData.get('message')
    }

    const res = await fetch('/api/sms', {
        method: 'POST',
        body: JSON.stringify(sms),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    alert('Message sent');
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-slate-900 p-10" onSubmit={onSubmit}>
        <h1 className="text-white text-3xl font-bold">Send an SMS</h1>

        <label htmlFor="input-phone" className="text-white block my-4">
          Write your phone number here:
        </label>
        <input
          id="input-phone"
          name="phone"
          type="tel"
          autoComplete="off"
          placeholder="Write your phone number here"
          className="px-3 py-1 rounded-md block"
        />

        <label htmlFor="textarea-message" className="text-white block my-4">
          Write your message here:
        </label>
        <textarea
          id="textarea-message"
          name="message"
          type="tel"
          placeholder="Write your message here"
          className="px-3 py-1 rounded-md block w-full"
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-md block mt-4"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Page;
