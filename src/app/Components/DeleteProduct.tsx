"use client";

import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";

export function DeletePage() {
  return (
    <AlertDialog>
      <Button variant="outline"  className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                    aria-label="Delete product"><Trash2 size={16} /></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading><span className="text-red-600">Delete project permanently?</span></AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}