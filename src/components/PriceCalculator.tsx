import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PriceCalculatorProps {
  mirrorSize: number;
  setMirrorSize: (size: number) => void;
  mirrorType: string;
  setMirrorType: (type: string) => void;
  frameColor: string;
  setFrameColor: (color: string) => void;
  lightTemp: string;
  setLightTemp: (temp: string) => void;
  hasOptions: boolean;
  setHasOptions: (hasOptions: boolean) => void;
  calculatePrice: () => number;
  scrollToSection: (sectionId: string) => void;
}

const PriceCalculator = ({
  mirrorSize,
  setMirrorSize,
  mirrorType,
  setMirrorType,
  frameColor,
  setFrameColor,
  lightTemp,
  setLightTemp,
  hasOptions,
  setHasOptions,
  calculatePrice,
  scrollToSection
}: PriceCalculatorProps) => {
  return (
    <Card className="mt-12 max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Калькулятор стоимости</h3>
        
        <div className="space-y-6">
          <div>
            <Label className="text-base mb-3 block">Размер (см): {mirrorSize}</Label>
            <Slider
              value={[mirrorSize]}
              onValueChange={(value) => setMirrorSize(value[0])}
              min={40}
              max={200}
              step={10}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>40 см</span>
              <span>200 см</span>
            </div>
          </div>

          <div>
            <Label className="text-base mb-3 block">Тип зеркала</Label>
            <RadioGroup value={mirrorType} onValueChange={setMirrorType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="led" id="led" />
                <Label htmlFor="led">LED подсветка</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hollywood" id="hollywood" />
                <Label htmlFor="hollywood">Голливудские лампы (+5000₽)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base mb-3 block">Цвет рамы</Label>
            <RadioGroup value={frameColor} onValueChange={setFrameColor}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="white" id="white" />
                <Label htmlFor="white">Белый</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="black" id="black" />
                <Label htmlFor="black">Чёрный</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wood" id="wood" />
                <Label htmlFor="wood">Дерево (+2000₽)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gold" id="gold" />
                <Label htmlFor="gold">Золото (+3000₽)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base mb-3 block">Температура света</Label>
            <RadioGroup value={lightTemp} onValueChange={setLightTemp}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="warm" id="warm" />
                <Label htmlFor="warm">Тёплый</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral">Нейтральный</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cold" id="cold" />
                <Label htmlFor="cold">Холодный</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="options"
              checked={hasOptions}
              onChange={(e) => setHasOptions(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            <Label htmlFor="options" className="cursor-pointer">Дополнительные опции (диммер, розетки) +4000₽</Label>
          </div>

          <div className="pt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Итоговая стоимость:</span>
              <span className="text-3xl font-bold text-primary">{calculatePrice().toLocaleString('ru-RU')} ₽</span>
            </div>
            <Button size="lg" className="w-full" onClick={() => scrollToSection('contacts')}>
              Заказать зеркало
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
