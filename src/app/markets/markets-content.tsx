import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const marketData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 68123.45,
    change24h: 2.5,
    marketCap: '1.3T',
    iconId: 'portfolio-asset-bitcoin',
    chartId: 'market-chart-btc',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3540.12,
    change24h: -1.2,
    marketCap: '425B',
    iconId: 'portfolio-asset-ethereum',
    chartId: 'market-chart-eth',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 150.78,
    change24h: 5.8,
    marketCap: '69B',
    iconId: 'portfolio-asset-solana', // You'll need to add this
    chartId: 'market-chart-sol', // You'll need to add this
  },
];

export default function MarketsContent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">
          Crypto Markets
        </h2>
        <p className="mt-1 text-muted-foreground">
          Explore real-time market data for top cryptocurrencies.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Top Coins</CardTitle>
          <CardDescription>
            Prices, 24h change, and market capitalization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">24h Change</TableHead>
                <TableHead className="hidden sm:table-cell text-right">
                  24h Chart
                </TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketData.map((coin) => {
                const icon = PlaceHolderImages.find(
                  (img) => img.id === coin.iconId
                );
                const chart = PlaceHolderImages.find(
                  (img) => img.id === coin.chartId
                );
                return (
                  <TableRow key={coin.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        {icon && (
                          <Image
                            src={icon.imageUrl}
                            alt={`${coin.name} icon`}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <p className="font-medium">{coin.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {coin.symbol}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      ${coin.price.toLocaleString()}
                    </TableCell>
                    <TableCell
                      className={`text-right font-medium ${
                        coin.change24h >= 0
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {coin.change24h >= 0 ? '+' : ''}
                      {coin.change24h.toFixed(2)}%
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-right">
                      {chart && (
                        <Image
                          src={chart.imageUrl}
                          alt={`${coin.name} 24h chart`}
                          width={100}
                          height={40}
                          className="ml-auto"
                        />
                      )}
                    </TableCell>
                    <TableCell className="text-right">{coin.marketCap}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
