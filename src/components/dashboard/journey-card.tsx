import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Calendar,
  Edit3,
  Eye,
  MoreHorizontal,
  Trash2,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { JourneyType } from "@/lib/types";

export default function JourneyCard({ journey }: { journey: JourneyType }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border-stone-200 hover:border-olive-200 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{journey.emoji}</div>
            <div>
              <h3 className="font-serif font-semibold text-lg text-stone-800 group-hover:text-olive-700 transition-colors">
                {journey.title}
              </h3>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-sm text-stone-500">
                  <Users className="h-4 w-4 mr-1" />
                  {journey.responses} responses
                </div>
                {journey.createdAt && (
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(journey.createdAt)}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {journey.status === "draft" && (
              <Badge
                variant="secondary"
                className="bg-amber-50 text-amber-700 border-amber-200"
              >
                Draft
              </Badge>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem className="cursor-pointer">
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex space-x-2">
          <Button
            size="sm"
            className="bg-olive-600 hover:bg-olive-700 text-white flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-olive-200 text-olive-700 hover:bg-olive-50 flex-1 bg-transparent"
          >
            <Edit3 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
