import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Users, Award, Mail, Gift } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Helios Hackathon: Games for the Greater Good</h1>
          <p className="text-xl text-blue-300">5th through 10th Grade Hackathon</p>
        </header>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">What is the Helios Hackathon?</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-blue-100">
            <p>
              The Helios Hackathon is an exciting event where 5th through 10th grade aspiring programmers come together
              to create games that make a positive impact on the world. Hosted by the Helios coding club, a student-run
              programming club, this hackathon aims to spark passion and spread coding and STEM throughout the Bay Area.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 text-blue-100">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-300" />
              <span><strong>When:</strong> November 16th, 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-blue-300" />
              <span><strong>Time:</strong> 9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-300" />
              <span>
                <strong>Where:</strong> Helios School in Sunnyvale (597 Central Ave, Sunnyvale, CA 94086)
                <Link href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" className="ml-2 text-blue-400 hover:underline">
                  View on Map
                </Link>
              </span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-300" />
              <span><strong>Who:</strong> 5th through 10th grade aspiring programmers</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Guest Speakers</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-blue-100">
            <ul className="list-disc list-inside space-y-2">
              <li>Jane Doe - CEO of Tech Innovators</li>
              <li>John Smith - Game Developer at Awesome Games Studio</li>
              <li>Dr. Emily Johnson - Computer Science Professor at Bay Area University</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Guest Judges</CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-blue-900 border-blue-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Michael Brown</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-200">
                <p>Founder of Educational Games Inc.</p>
                <p className="mt-2 text-sm">Expert in gamification for education</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900 border-blue-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">Sarah Lee</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-200">
                <p>Lead Designer at Social Impact Games</p>
                <p className="mt-2 text-sm">Specializes in games for social change</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900 border-blue-700">
              <CardHeader>
                <CardTitle className="text-lg text-white">David Wilson</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-200">
                <p>STEM Education Coordinator for Sunnyvale School District</p>
                <p className="mt-2 text-sm">Advocate for tech in schools</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-blue-800">
                <AccordionTrigger className="text-blue-100">What should I bring to the hackathon?</AccordionTrigger>
                <AccordionContent className="text-blue-200">
                  Bring your laptop, charger, and any other devices you might need. Don't forget to bring your creativity and enthusiasm!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-blue-800">
                <AccordionTrigger className="text-blue-100">Do I need to have coding experience?</AccordionTrigger>
                <AccordionContent className="text-blue-200">
                  While some coding experience is helpful, it's not required. We welcome participants of all skill levels and will have mentors available to help you learn and create your project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-blue-800">
                <AccordionTrigger className="text-blue-100">Will food be provided?</AccordionTrigger>
                <AccordionContent className="text-blue-200">
                  Yes, we will provide lunch and snacks throughout the day to keep you energized and focused on your projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Our Sponsors</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Gold Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="TechCorp Logo" width={150} height={75} />
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="InnovatEd Logo" width={150} height={75} />
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="FutureTech Logo" width={150} height={75} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-100 mb-4">Silver Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="CodeCraft Logo" width={100} height={50} />
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="ByteWise Logo" width={100} height={50} />
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="DataDreams Logo" width={100} height={50} />
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="AIFuture Logo" width={100} height={50} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Prizes</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-semibold text-blue-100">First Place</h3>
                <p className="text-blue-200">Latest iPad Pro for each team member</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-gray-400" />
              <div>
                <h3 className="text-xl font-semibold text-blue-100">Second Place</h3>
                <p className="text-blue-200">Noise-cancelling headphones for each team member</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <h3 className="text-xl font-semibold text-blue-100">Third Place</h3>
                <p className="text-blue-200">Smart watch for each team member</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Gift className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-blue-100">Special Categories</h3>
                <p className="text-blue-200">Various tech gadgets and gift cards for innovation, teamwork, and social impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">Sponsorship Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 text-blue-100">
            <h3 className="text-xl font-semibold">Why be a sponsor?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To support youth engagement in STEM</li>
              <li>To help young people make their community a better place</li>
              <li>To gain community visibility for your business</li>
              <li>To spark a fascination with computer science</li>
            </ul>
            <h3 className="text-xl font-semibold">How will funds be used?</h3>
            <p>Donations will be used for prizes, materials, and food for the participants.</p>
            <h3 className="text-xl font-semibold">Sponsorship Tiers</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Silver Tier ($150-$200)</h4>
                <ul className="list-disc list-inside">
                  <li>Display your logo on our Helios Hackathon website</li>
                  <li>Provide an official certificate of sponsorship</li>
                  <li>Mention your business at the opening and closing ceremony</li>
                  <li>Give you the opportunity to encourage STEM and computer science education locally</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Gold Tier ($200+)</h4>
                <p>All benefits of Silver Tier, plus:</p>
                <ul className="list-disc list-inside">
                  <li>Display your logo on Helios Hackathon t-shirts</li>
                  <li>Send promotional emails of your business to all participants</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">How to sponsor</h3>
              <p>To become a sponsor or for more information, please contact us:</p>
              <div className="flex items-center mt-2">
                <Mail className="w-6 h-6 mr-2 text-blue-300" />
                <a href="mailto:sponsor@helioshackathon.com" className="text-blue-400 hover:underline">
                  sponsor@helioshackathon.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-950 border-blue-800">
          <CardHeader className="bg-blue-900">
            <CardTitle className="text-2xl text-white">About Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-blue-100">
            <p>
              The Helios coding club is a student-run programming club hosting this elementary and middle school
              hackathon for young programmers looking to use their skills to positively impact the world. Helios is a
              K-8 gifted school designed to give the best education and provide the best environment to their students.
              Our goal is to spark passion and spread coding and STEM throughout the Bay Area, starting with this
              hackathon.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button className="text-lg py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white">
            Register Now and Start Your Coding Adventure!
          </Button>
        </div>
      </div>
    </div>
  )
}
