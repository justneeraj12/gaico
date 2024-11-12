"use client"

import Header from '../components/Header';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useRef } from 'react';

export default function Apply() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen">
      <Header servicesRef={servicesRef} contactRef={contactRef} />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-green-900/30 border-green-800/50 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-green-100">Apply for Funding</CardTitle>
              <CardDescription className="text-green-200">
                Tell us about your startup and how we can help you grow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-green-100">Company Name</Label>
                  <Input id="company" className="bg-green-800/30 border-green-700/50 text-green-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-100">Email</Label>
                  <Input id="email" type="email" className="bg-green-800/30 border-green-700/50 text-green-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-green-100">Website (if available)</Label>
                  <Input id="website" type="url" className="bg-green-800/30 border-green-700/50 text-green-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pitch" className="text-green-100">Pitch Description</Label>
                  <Textarea 
                    id="pitch" 
                    className="bg-green-800/30 border-green-700/50 text-green-100 min-h-[150px]"
                    placeholder="Tell us about your startup, your vision, and what makes you unique..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="funding" className="text-green-100">Funding Required</Label>
                  <Input id="funding" className="bg-green-800/30 border-green-700/50 text-green-100" />
                </div>
                <Button className="w-full bg-green-400 text-green-950 hover:bg-green-300">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
