import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import nexaBG from "@/assets/nexabg.jpeg"

const WHATSAPP_NUMBER = "5534996367430";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappBaseUrl = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER}?text=`, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const message =
      `Olá! Gostaria de falar com um especialista da DuBrasil Nexa.\n\n` +
      `Nome: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `WhatsApp: ${data.phone}\n\n` +
      `Mensagem:\n${data.message}`;

    const url = `${whatsappBaseUrl}${encodeURIComponent(message)}`;

    // Abre o WhatsApp com a mensagem pronta (sem envio por e-mail).
    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "Abrindo o WhatsApp…",
      description: "A mensagem foi preparada com os dados do formulário.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contato"
      className="relative py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${nexaBG})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-white/10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
                Pronto para <span className="text-[#002047]">transformar</span> seu atendimento?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Preencha o formulário e nossa equipe entrará em contato para mostrar como o DuBrasil Nexa pode ajudar seu negócio.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-white/70">(34) 99636-7430</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-white/70">contato@dubrasilnexa.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Telefone</p>
                    <p className="text-white/70">(34) 99636-7430</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Endereço</p>
                    <p className="text-white/70">
                      Av. Leopoldino de Oliveira, 4252 - Fabrício
                      <br />
                      Uberaba - MG, 38065-165
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                    rows={4}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
