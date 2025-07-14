export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 w-full max-w-3xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            What is this platform about?
          </h2>
          <p className="text-gray-600">
            This platform helps you manage and organize events efficiently.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            How can I create an event?
          </h2>
          <p className="text-gray-600">
            You can easily create an event by navigating to the Events page and
            clicking on the &quot;Add Event&quot; button.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Can I edit or delete my events?
          </h2>
          <p className="text-gray-600">
            Yes, you can edit or delete any event you&apos;ve created using the
            respective buttons on the event card.
          </p>
        </div>
      </div>
    </div>
  );
}
