import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Generate available time slots (9 AM to 5 PM in 1-hour increments)
  useEffect(() => {
    if (selectedDate) {
      const times = [];
      for (let hour = 9; hour <= 17; hour++) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        times.push(`${displayHour}:00 ${period}`);
      }
      setAvailableTimes(times);
    }
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would connect to your backend
      // which would then interact with Google Calendar API
      console.log("Booking appointment:", {
        date: selectedDate,
        time: selectedTime,
        name,
        email,
        phone
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Appointment Scheduled!",
        description: `Your appointment for ${selectedDate} at ${selectedTime} has been booked successfully.`,
      });

      // Reset form
      setSelectedDate("");
      setSelectedTime("");
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule appointment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule Your Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a convenient time for our gutter cleaning experts to visit your home
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                  />
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="justify-center"
                        >
                          <Clock className="w-4 h-4 mr-1" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full pl-10 p-3 border border-input rounded-md bg-background text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 p-3 border border-input rounded-md bg-background text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full pl-10 p-3 border border-input rounded-md bg-background text-foreground"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={!selectedDate || !selectedTime || !name || !email || !phone || isSubmitting}
                    className="w-full mt-6"
                  >
                    {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-card">
            <CardHeader>
              <CardTitle>Google Calendar Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
                  <p className="text-muted-foreground">
                    Your appointments will be automatically added to our Google Calendar
                  </p>
                </div>
                <Button variant="outline">
                  Connect Google Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Scheduling;